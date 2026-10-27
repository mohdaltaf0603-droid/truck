
import { useState } from "react";
import { Menu, Wrench } from "lucide-react";
import { companyInfo, navigationLinks } from "../data/siteData";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <a className="brand" href="#home" aria-label="TruckPro home">
            <span className="brand-symbol">
              <Wrench size={23} />
            </span>
            <span>
              <strong>{companyInfo.name}</strong>
              <small>TRUCK SERVICE EXPERTS</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a className="navbar-phone" href={`tel:${companyInfo.phone}`}>
              {companyInfo.phone}
            </a>

            <Button href="#contact" showArrow>
              Get a Quote
            </Button>
          </div>

          <button
            className="menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
