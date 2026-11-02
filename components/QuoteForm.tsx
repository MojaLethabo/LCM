"use client";

import { useEffect, useRef, useState } from "react";
import { eventTypes, site } from "@/lib/site";

type Errors = { name?: string; phone?: string };

export default function QuoteForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [today, setToday] = useState("");

  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const read = () => {
    const d = new FormData(ref.current!);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    return { name: g("name"), phone: g("phone"), type: g("type"), date: g("date"), guests: g("guests"), message: g("message") };
  };

  const validate = (v: ReturnType<typeof read>) => {
    const e: Errors = {};
    if (!v.name) e.name = "Please enter your name";
    if (!v.phone) e.phone = "Please enter a phone number";
    else if (v.phone.length < 9) e.phone = "That number looks too short";
    setErrors(e);
    const first = e.name ? "name" : e.phone ? "phone" : null;
    if (first) (ref.current!.elements.namedItem(first) as HTMLElement | null)?.focus();
    return !e.name && !e.phone;
  };

  const text = (v: ReturnType<typeof read>) =>
    [`Name: ${v.name}`, `Phone: ${v.phone}`, `Event: ${v.type}`, `Date: ${v.date || "not set"}`, `Guests: ${v.guests || "not set"}`, "", v.message].join("\n");

  const send = (via: "whatsapp" | "email") => {
    const v = read();
    if (!validate(v)) return;
    if (via === "whatsapp") {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text(v))}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Catering quote request")}&body=${encodeURIComponent(text(v))}`;
    }
  };

  return (
    <form ref={ref} className="form" noValidate onSubmit={(e) => { e.preventDefault(); send("whatsapp"); }}>
      <div className="two">
        <label>
          Your name
          <input name="name" autoComplete="name" aria-invalid={!!errors.name} />
          <span className="err" role="alert">{errors.name}</span>
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} />
          <span className="err" role="alert">{errors.phone}</span>
        </label>
      </div>
      <label>
        Event type
        <select name="type">
          {eventTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <div className="two">
        <label>Date<input name="date" type="date" min={today} /></label>
        <label>Number of guests<input name="guests" type="number" min={1} inputMode="numeric" /></label>
      </div>
      <label>
        Anything we should know?
        <textarea name="message" rows={2} placeholder="Venue, dietary needs, budget" />
      </label>
      <div className="row">
        <button className="btn" type="submit">Send on WhatsApp</button>
        <button className="btn line" type="button" onClick={() => send("email")}>Send by email</button>
      </div>
    </form>
  );
}
