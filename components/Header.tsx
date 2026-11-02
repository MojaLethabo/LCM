// components/Header.tsx
import Image from "next/image";
import { nav, site } from "@/lib/site";

// Matches the logo image's background. If a faint box still shows, sample the
// exact colour from the file with a colour picker and change this value.
const LOGO_BG = "#f7f7f7";

export default function Header() {
  return (
    <header className="site-header" style={{ background: LOGO_BG }}>
      <style>{`
        .logo {
          display: inline-flex;
          align-items: center;
        }
        .logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .logo-img { height: 40px; }
        }
      `}</style>

      <div className="wrap bar">
        <a className="logo" href="#top">
          <Image
            className="logo-img"
            src="/logos/Logo.jpeg"
            alt="LCM Catering logo"
            width={1600}
            height={601}
            priority
          />
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