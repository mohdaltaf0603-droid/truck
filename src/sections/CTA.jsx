
import { ArrowRight, PhoneCall } from "lucide-react";
import { companyInfo } from "../data/siteData";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-content">
        <div>
          <span className="eyebrow">LET'S GET YOU MOVING</span>
          <h2>Need reliable service for your truck?</h2>
          <p>
            Tell us what you need. Our team can help you plan your next
            service appointment.
          </p>
        </div>

        <div className="cta-actions">
          <a className="btn btn-light" href="#contact">
            Request a Quote <ArrowRight size={18} />
          </a>

          <a
            className="cta-phone"
            href={`tel:${companyInfo.phone}`}
          >
            <PhoneCall size={18} />
            {companyInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
