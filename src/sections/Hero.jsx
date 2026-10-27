
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import Button from "../components/Button";
import { companyInfo } from "../data/siteData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-dot" />
            COMMERCIAL TRUCK SERVICE
          </span>

          <h1>
            Keep Your Trucks
            <br />
            <span>Moving Forward.</span>
          </h1>

          <p className="hero-description">
            Reliable truck repair, preventive maintenance and fleet
            support to keep your business moving with confidence.
          </p>

          <div className="hero-actions">
            <Button href="#contact" showArrow>
              Book a Service
            </Button>

            <a
              className="hero-call"
              href={`tel:${companyInfo.phone}`}
            >
              <span className="call-icon">
                <PhoneCall size={19} />
              </span>
              <span>
                <small>Talk to our team</small>
                <strong>{companyInfo.phone}</strong>
              </span>
            </a>
          </div>

          <div className="hero-points">
            <span><CheckCircle2 size={17} /> Experienced technicians</span>
            <span><CheckCircle2 size={17} /> Clear service estimates</span>
            <span><CheckCircle2 size={17} /> Fleet-focused support</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/assets/images/hero-truck.png"
              alt="Heavy-duty commercial truck ready for service"
              fetchPriority="high"
            />
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">
              <CheckCircle2 size={24} />
            </span>
            <span>
              <strong>Dependable Service</strong>
              <small>Built around your business</small>
            </span>
            <ArrowRight size={18} />
          </div>

          <div className="hero-decoration" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-bottom-line" />
    </section>
  );
}
