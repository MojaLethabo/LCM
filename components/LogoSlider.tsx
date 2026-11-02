"use client";

import { useCallback, useEffect, useState } from "react";
import { clients } from "@/lib/site";

export default function LogoSlider() {
  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const last = clients.length - perView;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () => {
      setPerView(mq.matches ? 2 : 4);
      setIndex(0);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const go = useCallback(
    (d: number) => setIndex((i) => (i + d > last ? 0 : i + d < 0 ? last : i + d)),
    [last],
  );

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => go(1), 3000);
    return () => clearInterval(t);
  }, [playing, go]);

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Companies we cater for">
      <div className="vp">
        <ul className="track" style={{ transform: `translateX(-${index * (100 / perView)}%)` }}>
          {clients.map((c) => (
            <li key={c.name}>
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={c.name} loading="lazy" />
              ) : (
                c.name
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="ctl">
        <button type="button" onClick={() => go(-1)}>Previous</button>
        <button type="button" onClick={() => go(1)}>Next</button>
        <button type="button" onClick={() => setPlaying((p) => !p)}>{playing ? "Pause" : "Play"}</button>
        <span className="pos">{index + 1} of {last + 1}</span>
      </div>
    </div>
  );
}
