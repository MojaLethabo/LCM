import Image from "next/image";
import { credentials, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="hero-img" />
      <div className="wrap">
        <div className="hero-copy">
          <h1>Good food, so your team can get on with the work.</h1>
          <p>
            Conferences, boardroom lunches, awards evenings and daily meal deliveries. We have
            catered for Johannesburg&rsquo;s businesses and institutions since 2009.
          </p>
          <div className="row">
            <a className="btn" href="#contact">Request a quote</a>
            <a className="btn line" href={`tel:${site.phoneMobileHref}`}>Call {site.phoneMobile}</a>
          </div>
        </div>
        <ul className="creds">
          {credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
