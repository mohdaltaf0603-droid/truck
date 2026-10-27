
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  type = "button",
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight size={18} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}
