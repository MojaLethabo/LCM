import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import QuoteForm from "@/components/QuoteForm";
import { About, Gallery, Promise, Services, Steps } from "@/components/Sections";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promise />
        <Services />
        <About />
        <Gallery />

        <section id="clients" className="clients section">
          <div className="wrap">
            <div className="client-head">
              <h2>Trusted by the companies that keep South Africa moving.</h2>
              <p>A few of the businesses and institutions we feed regularly.</p>
            </div>
            <LogoSlider />
          </div>
        </section>

        <Steps />

        <section id="contact" className="contact">
          <div className="wrap contact-grid">
            <div>
              <h2>Tell us about your event.</h2>
              <p className="lead">Send the details and Mac will come back with a quote.</p>
              <ul className="details">
                <li><small>Managing Director</small><span>{site.contact}</span></li>
                <li>
                  <small>Phone</small>
                  <a href={`tel:${site.phoneMainHref}`}>{site.phoneMain}</a> &nbsp;/&nbsp; <a href={`tel:${site.phoneMobileHref}`}>{site.phoneMobile}</a>
                </li>
                <li><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><small>Address</small><span>{site.address}</span></li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">&copy; {site.year} LCM Catering, a division of Capitol Water Technologies (Pty) Ltd.</div>
      </footer>
      <a className="fab" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
    </>
  );
}
