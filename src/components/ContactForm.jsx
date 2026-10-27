
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { companyInfo, services } from "../data/siteData";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete your name, email and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      `Truck service inquiry: ${form.service || "General inquiry"}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Service: ${form.service || "Not specified"}`,
        "",
        "Message:",
        form.message
      ].join("\n")
    );

    window.location.href =
      `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <SectionTitle
            eyebrow="GET IN TOUCH"
            title="Let's Talk About Your Truck"
            description="Contact our team for service questions, maintenance planning or a repair estimate."
          />

          <div className="contact-detail">
            <span><Phone size={21} /></span>
            <div>
              <small>Call us</small>
              <a href={`tel:${companyInfo.phone}`}>
                {companyInfo.phone}
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span><Mail size={21} /></span>
            <div>
              <small>Email us</small>
              <a href={`mailto:${companyInfo.email}`}>
                {companyInfo.email}
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span><MapPin size={21} /></span>
            <div>
              <small>Visit us</small>
              <p>{companyInfo.address}</p>
            </div>
          </div>

          <div className="contact-detail">
            <span><Clock size={21} /></span>
            <div>
              <small>Business hours</small>
              <p>{companyInfo.hours}</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Request a Service Quote</h3>
          <p>Share a few details and tell us how we can help.</p>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="contact-name">Full name *</label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email address *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-phone">Phone number</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateField}
                placeholder="Your phone number"
                autoComplete="tel"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-service">Service needed</label>
              <select
                id="contact-service"
                name="service"
                value={form.service}
                onChange={updateField}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="contact-message">How can we help? *</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Describe your truck or service requirements..."
                rows={5}
                required
              />
            </div>
          </div>

          {error && <p className="form-error" role="alert">{error}</p>}

          <Button type="submit" showArrow>
            <Send size={17} /> Send Inquiry
          </Button>

          <small className="form-disclaimer">
            This form opens your email application; it does not send
            information directly to our server.
          </small>
        </form>
      </div>
    </section>
  );
}
