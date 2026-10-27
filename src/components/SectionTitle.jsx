
export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  light = false
}) {
  return (
    <div
      className={[
        "section-title",
        centered ? "text-center" : "",
        light ? "section-title-light" : ""
      ].filter(Boolean).join(" ")}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
