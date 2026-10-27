
import { Star, Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/siteData";

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <SectionTitle
          eyebrow="CUSTOMER FEEDBACK"
          title="Built on Trust and Reliable Service"
          description="See what customers say about their service experience."
          centered
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <Quote className="testimonial-quote-icon" size={30} />

              <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }, (_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote>“{item.quote}”</blockquote>

              <div className="testimonial-person">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                />

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                  <small>{item.company}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
