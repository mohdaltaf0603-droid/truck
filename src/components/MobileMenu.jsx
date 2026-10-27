
import { X } from "lucide-react";
import { navigationLinks } from "../data/siteData";
import Button from "./Button";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="mobile-menu-backdrop" onClick={onClose}>
      <nav
        className="mobile-menu"
        aria-label="Mobile navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mobile-menu-heading">
          <span>Menu</span>
          <button
            className="icon-control"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={23} />
          </button>
        </div>

        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}

        <Button href="#contact" showArrow onClick={onClose}>
          Get a quote
        </Button>
      </nav>
    </div>
  );
}
