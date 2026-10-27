
import SectionTitle from "./SectionTitle";
import { benefits } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <div className="why-intro">
          <SectionTitle
            eyebrow="WHY TRUCKPRO"
            title="Service That Works as Hard as You Do"
            description="Your vehicles are essential to your business. We focus on dependable service, clear communication and maintenance that helps you plan ahead."
          />

          <a className="btn btn-primary" href="#contact">
            Discuss Your Fleet
          </a>
        </div>

        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="benefit-card" key={title}>
              <span className="benefit-icon">
                <Icon size={26} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
