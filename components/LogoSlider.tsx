"use client";

import { useEffect, useState } from "react";
import { clients } from "@/lib/site";

export default function LogoSlider() {
  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(0);
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

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1 > last ? 0 : i + 1)),
      3000,
    );
    return () => clearInterval(t);
  }, [last]);

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Companies we cater for">
      <style>{`
        .vp, .track { border-top: 0 !important; }
      `}</style>
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
    </div>
  );
}