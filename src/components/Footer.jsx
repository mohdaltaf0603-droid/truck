
import { ArrowUpRight, Wrench } from "lucide-react";
import { companyInfo, navigationLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#home" className="brand footer-logo">
            <span className="brand-symbol">
              <Wrench size={22} />
            </span>
            <span>
              <strong>{companyInfo.name}</strong>
              <small>TRUCK SERVICE EXPERTS</small>
            </span>
          </a>

          <p>
            Helping truck owners and fleet operators keep their
            vehicles dependable, safe and ready for the road.
          </p>

          <a href="#contact" className="footer-contact-link">
            Talk to our team <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <a href="#services">Truck Repair</a>
          <a href="#services">Preventive Maintenance</a>
          <a href="#services">Fleet Services</a>
          <a href="#services">Engine Diagnostics</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href={`tel:${companyInfo.phone}`}>
            {companyInfo.phone}
          </a>
          <a href={`mailto:${companyInfo.email}`}>
            {companyInfo.email}
          </a>
          <p>{companyInfo.address}</p>
          <p>{companyInfo.hours}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {companyInfo.name}.
          All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
