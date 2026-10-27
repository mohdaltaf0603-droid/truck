import heroSection from "./assets/Desktop - 1.png";
import aboutSection from "./assets/Desktop - 3.png";
import locationSection from "./assets/Desktop - 4.png";
import gallerySection from "./assets/Desktop - 5.png";
import servicesSection from "./assets/Desktop - 6.png";
import footerSection from "./assets/Footer 2.png";
import contactSection from "./assets/unsplash_GBVDilE8yvI.png";

const sections = [
  { src: heroSection, alt: "EURO Truck Service header and truck service introduction" },
  { src: aboutSection, alt: "About the truck service and supported truck brands" },
  { src: servicesSection, alt: "Truck service and maintenance offerings" },
  { src: gallerySection, alt: "Truck service photo gallery" },
  { src: locationSection, alt: "Truck service location and map" },
  { src: contactSection, alt: "Contact form for truck service questions" },
  { src: footerSection, alt: "EURO Truck Service contact information and footer" }
];

export default function App() {
  return (
    <main className="figma-page" aria-label="EURO Truck Service landing page">
      {sections.map((section) => (
        <img
          className="figma-section"
          key={section.src}
          src={section.src}
          alt={section.alt}
        />
      ))}
    </main>
  );
}
