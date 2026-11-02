"use client";

import { useEffect, useRef, useState } from "react";
import { eventTypes, site } from "@/lib/site";

type Errors = { name?: string; phone?: string };
type Values = ReturnType<typeof readValues>;

function readValues(form: HTMLFormElement) {
  const d = new FormData(form);
  const g = (k: string) => String(d.get(k) ?? "").trim();
  return {
    name: g("name"),
    phone: g("phone"),
    type: g("type"),
    date: g("date"),
    guests: g("guests"),
    message: g("message"),
  };
}

// "2026-11-25" -> "25 November 2026" (parsed locally, so no timezone shift)
function prettyDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildStory(v: Values) {
  const type = v.type.trim();
  const article = /^[aeiou]/i.test(type) ? "an" : "a";

  let ask = type
    ? `I'd like a quote for catering ${article} ${type.toLowerCase()}`
    : "I'd like a quote for catering an event";
  if (v.date) ask += ` on ${prettyDate(v.date)}`;
  if (v.guests) ask += ` for about ${v.guests} guest${v.guests === "1" ? "" : "s"}`;
  ask += ".";

  const parts = [
    `Hi ${site.name}, my name is ${v.name}.`,
    ask,
  ];
  if (v.message) {
    parts.push(/[.!?]$/.test(v.message) ? v.message : `${v.message}.`);
  }
  parts.push(`You can reach me on ${v.phone}. Thank you!`);

  return parts.join(" ");
}

export default function QuoteForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [today, setToday] = useState("");

  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const validate = (v: Values) => {
    const e: Errors = {};
    if (!v.name) e.name = "Please enter your name";
    if (!v.phone) e.phone = "Please enter a phone number";
    else if (v.phone.length < 9) e.phone = "That number looks too short";
    setErrors(e);
    const first = e.name ? "name" : e.phone ? "phone" : null;
    if (first) (ref.current!.elements.namedItem(first) as HTMLElement | null)?.focus();
    return !e.name && !e.phone;
  };

  const send = (via: "whatsapp" | "email") => {
    const v = readValues(ref.current!);
    if (!validate(v)) return;
    const story = buildStory(v);
    if (via === "whatsapp") {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(story)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Catering quote request from ${v.name}`)}&body=${encodeURIComponent(story)}`;
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