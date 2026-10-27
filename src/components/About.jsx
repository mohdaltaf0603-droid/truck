
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const highlights = [
  "Commercial truck repair and inspections",
  "Preventive fleet maintenance plans",
  "Transparent communication and estimates",
  "Service recommendations focused on safety"
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="/assets/images/about-truck.png"
            alt="Commercial truck in a professional service facility"
            loading="lazy"
          />

          <div className="about-experience">
            <strong>10+</strong>
            <span>Years of Service</span>
          </div>
        </div>

        <div className="about-content">
          <SectionTitle
            eyebrow="ABOUT TRUCKPRO"
            title="Your Trusted Partner on Every Mile"
            description="We help truck owners and fleet operators maintain reliable vehicles with practical repair and maintenance solutions."
          />

          <p>
            From scheduled maintenance to troubleshooting unexpected
            issues, our goal is to make your service experience clear,
            organized and dependable.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Button href="#services" showArrow>
            Explore Our Services
          </Button>

          <a className="about-secondary-link" href="#contact">
            Have a question? Contact us <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
