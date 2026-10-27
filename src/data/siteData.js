
import {
  Wrench,
  Settings,
  Truck,
  Gauge,
  ShieldCheck,
  Clock,
  Headset,
  BadgeCheck
} from "lucide-react";

export const companyInfo = {
  name: "TruckPro",
  tagline: "Keeping Your Fleet Moving",
  phone: "+1 (800) 555-0198",
  email: "service@truckpro.example",
  address: "123 Industrial Avenue, Your City",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM"
};

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    id: 1,
    title: "Truck Repair",
    description:
      "Professional engine, transmission and mechanical repairs to help get your truck back on the road.",
    image: "/assets/images/service-repair.png",
    icon: Wrench
  },
  {
    id: 2,
    title: "Preventive Maintenance",
    description:
      "Routine inspections, oil changes, fluid checks and scheduled servicing for your fleet.",
    image: "/assets/images/service-maintenance.png",
    icon: Settings
  },
  {
    id: 3,
    title: "Fleet Services",
    description:
      "Maintenance planning and repair support designed for commercial fleet operators.",
    image: "/assets/images/hero-truck.png",
    icon: Truck
  },
  {
    id: 4,
    title: "Engine Diagnostics",
    description:
      "Diagnostic testing to identify mechanical and electronic faults before they become costly problems.",
    image: "/assets/images/about-truck.png",
    icon: Gauge
  }
];

export const statistics = [
  { value: "10+", label: "Years of Experience" },
  { value: "2,500+", label: "Trucks Serviced" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Emergency Support" }
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "Careful inspections and repair procedures focused on reliability and safety."
  },
  {
    icon: Clock,
    title: "Efficient Turnaround",
    description:
      "Clear estimates and organized service scheduling to reduce unnecessary downtime."
  },
  {
    icon: Headset,
    title: "Friendly Support",
    description:
      "Straightforward communication from the first inquiry through service completion."
  },
  {
    icon: BadgeCheck,
    title: "Fleet-Focused Care",
    description:
      "Maintenance options designed around commercial vehicle operating needs."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Book Your Service",
    description:
      "Tell us about your truck, the problem and your preferred appointment."
  },
  {
    number: "02",
    title: "Inspection & Estimate",
    description:
      "Our service team reviews the issue and explains the recommended work."
  },
  {
    number: "03",
    title: "Repair & Maintenance",
    description:
      "Approved work is completed with attention to quality and safety."
  },
  {
    number: "04",
    title: "Back on the Road",
    description:
      "Review the completed service and plan any recommended follow-up."
  }
];

export const testimonials = [
  {
    name: "Michael Anderson",
    role: "Fleet Manager",
    company: "Anderson Logistics",
    image: "/assets/images/testimonial-client.png",
    rating: 5,
    quote:
      "The team communicates clearly, explains the work and helps us plan maintenance around our fleet schedule."
  },
  {
    name: "David Miller",
    role: "Owner-Operator",
    company: "Independent Transport",
    image: "/assets/images/testimonial-client.png",
    rating: 5,
    quote:
      "The service process was straightforward, and I appreciated the clear estimate before repairs began."
  },
  {
    name: "Robert Wilson",
    role: "Operations Manager",
    company: "Wilson Freight",
    image: "/assets/images/testimonial-client.png",
    rating: 5,
    quote:
      "A helpful service team that understands the importance of vehicle reliability and timely communication."
  }
];
