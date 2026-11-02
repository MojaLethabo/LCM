import Image from "next/image";
import { facts, gallery, photos, promises, services } from "@/lib/site";

// Shows the real image when `src` is set, otherwise the grey placeholder with its caption.
function Photo({ caption, className = "", src, alt }: { caption: string; className?: string; src?: string; alt?: string }) {
  return (
    <figure className={`photo ${className}`}>
      {src ? (
        <Image src={src} alt={alt ?? caption} fill sizes="(max-width: 900px) 100vw, 50vw" className="photo-img" />
      ) : (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
}

export function Promise() {
  return (
    <section className="promise">
      <div className="wrap">
        <h2>Four things we promise every client.</h2>
        <ul>
          {promises.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap svc-grid">
        <Photo {...photos.services} />
        <div>
          <h2>What we cater</h2>
          <p className="lead">One team handles the food, the service and the clean-up.</p>
          <ul className="svc-list">
            {services.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about section">
      <div className="wrap about-grid">
        <div>
          <h2>Run by people who ran Transnet&rsquo;s restaurants.</h2>
          <div className="copy">
            <p>
              LCM Catering began in 2009 and joined Capitol Water Technologies in 2018, under the
              same owners. Managing Director Mac Lebeko spent nine years as Senior Events and
              Restaurant Facilities Manager at Transnet, after senior roles at Tsebo (formerly Fedics).
            </p>
            <p>
              Every team member is trained and certified in customer service, food handling, first
              aid, and health and safety. We buy locally and train people from the communities we serve.
            </p>
          </div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dd>{f.value}</dd>
                <dt>{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <Photo {...photos.about} />
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <h2>From our kitchen</h2>
        <div className="gal">
          {gallery.map((g) => (
            <Photo key={g.caption} caption={g.caption} className={g.cls} src={g.src} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="how section">
      <div className="wrap">
        <h2>How it works</h2>
        <ol className="steps">
          <li><b>Tell us the details</b><span>Date, guest numbers, venue and budget.</span></li>
          <li><b>Get your quote</b><span>Menu options and a clear price.</span></li>
          <li><b>We cater</b><span>We set up, serve and clear away.</span></li>
        </ol>
      </div>
    </section>
  );
}
