
import { ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { processSteps } from "../data/siteData";

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionTitle
          eyebrow="HOW IT WORKS"
          title="Simple From Start to Finish"
          description="A straightforward service process designed to keep you informed."
          centered
        />

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.number}>
              <div className="process-number">
                <span>{step.number}</span>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="process-arrow" size={20} />
                )}
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
