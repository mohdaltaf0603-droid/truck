
import { statistics } from "../data/siteData";

export default function Statistics() {
  return (
    <section className="statistics-section" aria-label="Company statistics">
      <div className="container statistics-grid">
        {statistics.map((item) => (
          <div className="statistic-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
