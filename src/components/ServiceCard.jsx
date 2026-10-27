
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <a
        className="service-image-link"
        href="#contact"
        aria-label={`Request ${service.title}`}
      >
        <img
          className="service-image"
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <span className="service-icon">
          <Icon size={25} />
        </span>
      </a>

      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <a href="#contact" className="service-link">
          Learn more <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}
