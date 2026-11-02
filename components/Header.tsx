import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="logo" href="#top">
          LCM<span>.</span> Catering
        </a>
        <nav aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
          <a className="tel" href={`tel:${site.phoneMobileHref}`}>{site.phoneMobile}</a>
        </nav>
        <details className="menu">
          <summary>Menu</summary>
          <div>
            {nav.slice(0, 4).map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
            <a href="#contact">Get a quote</a>
          </div>
        </details>
      </div>
    </header>
  );
}
