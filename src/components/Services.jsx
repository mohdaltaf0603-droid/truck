
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionTitle
          eyebrow="WHAT WE DO"
          title="Complete Truck Service Solutions"
          description="Practical repair and maintenance services for trucks and commercial fleets."
          centered
        />

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
