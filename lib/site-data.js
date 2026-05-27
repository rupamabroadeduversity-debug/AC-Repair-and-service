export const siteConfig = {
  companyName: "PolarCool AC Services",
  siteUrl: "https://polarcool-services.example.com",
  phone: "+18005551234",
  phoneDisplay: "+1 (800) 555-1234",
  email: "bookings@polarcool-services.example.com",
  whatsappLink:
    "https://wa.me/18005551234?text=Hi%20PolarCool%2C%20I%20want%20to%20book%20an%20AC%20service.",
  address: "145 Frostline Business Center, Cooling District, Your City",
  mapEmbedUrl:
    "https://www.google.com/maps?q=145%20Frostline%20Business%20Center%2C%20Cooling%20District%2C%20Your%20City&z=14&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=145%20Frostline%20Business%20Center%2C%20Cooling%20District%2C%20Your%20City",
  media: {
    heroImage:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    heroVideo:
      "https://assets.mixkit.co/videos/preview/mixkit-technician-checking-an-air-conditioner-41955-large.mp4",
    teamImage: "/images/about/team-service-standards.svg",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    name: "AC Repair",
    slug: "ac-repair",
    badge: "Repair",
    description: "Diagnostics, fault isolation, and repair for cooling, noise, leakage, and electrical issues.",
    longDescription:
      "Targeted AC repair service for no-cooling complaints, water leakage, sensor faults, indoor noise, outdoor unit issues, and performance instability. Ideal when the system needs proper diagnosis and skilled repair rather than guesswork.",
    includes: [
      "Multi-point issue diagnosis and fault isolation",
      "Cooling performance and airflow checks",
      "Electrical inspection and connector tightening",
      "Repair estimate with transparent recommendation",
    ],
    bestFor: ["No cooling", "Water leakage", "Abnormal noise", "Compressor trips"],
    image: "/images/services/ac-repair.svg",
  },
  {
    name: "AC Servicing",
    slug: "ac-servicing",
    badge: "Routine care",
    description: "Preventive servicing to improve cooling output, airflow quality, and system efficiency.",
    longDescription:
      "Routine servicing designed to remove dust buildup, optimize airflow, inspect operating conditions, and keep AC performance stable through heavy seasonal use.",
    includes: [
      "Indoor unit surface and filter cleaning",
      "Drain line and airflow check",
      "Temperature and functional performance review",
      "Service notes with maintenance recommendations",
    ],
    bestFor: ["Seasonal tune-up", "Low airflow", "Dusty filters", "Regular upkeep"],
    image: "/images/services/ac-servicing.svg",
  },
  {
    name: "AC Installation",
    slug: "ac-installation",
    badge: "New setup",
    description: "Neat, precise installation for new indoor and outdoor AC units with testing.",
    longDescription:
      "Professional installation service covering placement guidance, mounting, system setup, safety checks, and operational testing for reliable cooling from day one.",
    includes: [
      "Positioning and placement guidance",
      "Indoor and outdoor unit mounting support",
      "Testing for cooling output and stability",
      "Customer walkthrough after completion",
    ],
    bestFor: ["New home setup", "Office fit-out", "Unit replacement", "Relocation"],
    image: "/images/services/ac-installation.svg",
  },
  {
    name: "Gas Refill",
    slug: "gas-refill",
    badge: "Performance restore",
    description: "Pressure checks and refrigerant refill for weak cooling and efficiency drops.",
    longDescription:
      "Cooling performance recovery service for ACs showing low refrigerant symptoms, weak cooling output, longer runtime, or suspected pressure imbalance.",
    includes: [
      "Cooling and pressure inspection",
      "Leak symptom review before refill",
      "Refrigerant top-up or refill guidance",
      "Post-refill performance check",
    ],
    bestFor: ["Weak cooling", "Long cooling cycles", "Low pressure symptoms", "Post-repair top-up"],
    image: "/images/services/gas-refill.svg",
  },
  {
    name: "AC Deep Cleaning",
    slug: "ac-deep-cleaning",
    badge: "Hygiene",
    description: "Detailed cleaning for coils, filters, drainage, and airflow paths to restore freshness.",
    longDescription:
      "Deep cleaning service for AC units affected by dust buildup, odor, clogged drainage, microbial residue, or declining airflow. Best when standard servicing is not enough.",
    includes: [
      "Detailed indoor cleaning workflow",
      "Drain and visible buildup clearing",
      "Airflow path cleaning for fresher output",
      "Cleanliness and performance review",
    ],
    bestFor: ["Odor issues", "Heavy dust", "Clogged drainage", "Seasonal reset"],
    image: "/images/services/ac-deep-cleaning.svg",
  },
  {
    name: "AMC Maintenance",
    slug: "amc-maintenance",
    badge: "Annual care",
    description: "Scheduled preventive maintenance for consistent performance and fewer breakdowns.",
    longDescription:
      "Annual maintenance contracts designed for homeowners, offices, and commercial operators who want planned servicing, reduced surprise failures, and documented upkeep.",
    includes: [
      "Planned service visits across the year",
      "Priority support scheduling",
      "Maintenance logs and service reminders",
      "Preventive performance review",
    ],
    bestFor: ["Homes with multiple units", "Offices", "Retail chains", "Property managers"],
    image: "/images/services/amc-maintenance.svg",
  },
  {
    name: "Commercial AC Support",
    slug: "commercial-ac-support",
    badge: "Business support",
    description: "Reliable response for office, retail, and light commercial cooling systems.",
    longDescription:
      "Commercial AC support for offices, showrooms, clinics, restaurants, and retail environments where cooling uptime directly affects staff comfort and customer experience.",
    includes: [
      "Site-based service coordination",
      "Support for multi-unit cooling setups",
      "Priority issue diagnosis and repair workflow",
      "Maintenance guidance for facility teams",
    ],
    bestFor: ["Offices", "Retail", "Clinics", "Property operations"],
    image: "/images/services/commercial-ac-support.svg",
  },
  {
    name: "Emergency Repair",
    slug: "emergency-repair",
    badge: "24/7 response",
    description: "Rapid support for urgent cooling failures, shutdowns, and breakdown symptoms.",
    longDescription:
      "Fast-response repair priority for urgent breakdowns, zero-cooling situations, unusual unit sounds, repeated tripping, and sudden shutdowns that need immediate attention.",
    includes: [
      "Priority booking queue",
      "Rapid diagnosis on arrival",
      "Stabilization and repair recommendation",
      "Post-fix cooling and safety checks",
    ],
    bestFor: ["Zero cooling", "Sudden shutdown", "Office downtime", "Night or weekend callout"],
    image: "/images/services/emergency-repair.svg",
  },
];

export const processSteps = [
  {
    title: "Choose Service",
    description: "Select repair, servicing, installation, deep cleaning, gas refill, or AMC support.",
  },
  {
    title: "Schedule Visit",
    description: "Pick your preferred slot and share the AC type, issue, and service location.",
  },
  {
    title: "Technician Inspection",
    description: "Our technician checks the unit, explains the issue clearly, and confirms the right solution.",
  },
  {
    title: "Repair & Testing",
    description: "We complete the job neatly, test cooling performance, and leave you with a clear update.",
  },
];

export const stats = [
  { label: "Service visits completed", value: "12k+", countTo: 12, suffix: "k+" },
  { label: "Average booking response", value: "15 min", countTo: 15, suffix: " min" },
  { label: "First-visit resolution rate", value: "98%", countTo: 98, suffix: "%" },
  { label: "Warranty-backed repairs", value: "90 days", countTo: 90, suffix: " days" },
];

export const pricingPlans = [
  {
    tag: "Essential",
    name: "Basic Service",
    price: "$49",
    priceNote: "/ visit",
    description: "A reliable maintenance visit for routine cleaning, inspection, and airflow optimization.",
    features: [
      "Routine service and performance check",
      "Filter and accessible cleaning",
      "Drain inspection",
      "Technician advice for next steps",
    ],
    featured: false,
    pricingNotes: [
      {
        title: "AC type & tonnage",
        description: "Larger systems, cassette units, and commercial equipment may require additional time and service scope.",
      },
      {
        title: "Repair complexity",
        description: "Fault diagnosis, spare parts, and special access requirements can affect the final quote after inspection.",
      },
      {
        title: "Urgency & timing",
        description: "Emergency visits, after-hours support, and priority scheduling may carry a different service fee.",
      },
    ],
  },
  {
    tag: "Popular",
    name: "Deep Clean Plus",
    price: "$89",
    priceNote: "/ unit",
    description: "Best for low airflow, odor, dust buildup, or units that need a more detailed reset.",
    features: [
      "Detailed indoor deep cleaning",
      "Drain line and buildup clearing",
      "Cooling and airflow review",
      "Recommended for seasonal recovery",
    ],
    featured: true,
  },
  {
    tag: "Annual plan",
    name: "AMC Premium",
    price: "$249",
    priceNote: "/ year",
    description: "Planned maintenance visits, priority support, and better long-term AC reliability.",
    features: [
      "4 scheduled service visits",
      "Priority booking support",
      "Maintenance reminders and logs",
      "Discounted repair callouts",
    ],
    featured: false,
  },
];

export const galleryItems = [
  {
    label: "Before / After",
    title: "Deep-cleaned indoor unit",
    description: "A premium cleaning pass that restores airflow, freshness, and customer confidence.",
    image: "/images/gallery/deep-cleaned-indoor-unit.svg",
  },
  {
    label: "On-site repair",
    title: "Technician fault diagnosis",
    description: "Careful system inspection before parts replacement or service recommendations.",
    image: "/images/gallery/technician-fault-diagnosis.svg",
  },
  {
    label: "Installation",
    title: "Neat final fit and testing",
    description: "Professional installation finishing with a clean handover and working system check.",
    image: "/images/gallery/neat-final-fit-and-testing.svg",
  },
  {
    label: "Workshop",
    title: "Tools and preparation",
    description: "Prepared technicians arrive with the tools needed for efficient service execution.",
    image: "/images/gallery/tools-and-preparation.svg",
  },
  {
    label: "Outdoor unit",
    title: "Outdoor system servicing",
    description: "Outdoor unit checks to keep heat exchange and cooling performance stable.",
    image: "/images/gallery/outdoor-system-servicing.svg",
  },
  {
    label: "Happy customer",
    title: "Comfort restored",
    description: "Customers get clean service, clear communication, and faster cooling recovery.",
    image: "/images/gallery/comfort-restored.svg",
  },
];

export const testimonials = [
  {
    name: "Alicia Brooks",
    role: "Homeowner",
    quote:
      "The technician arrived on time, explained the issue clearly, and got the cooling back quickly. The whole experience felt polished and professional.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Daniel Carter",
    role: "Office facilities manager",
    quote:
      "We needed same-day help for multiple units in our workspace. Their team handled it calmly, cleaned up well, and kept our staff updated throughout.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Retail store owner",
    quote:
      "The service felt premium from booking to final testing. Pricing was transparent and the AC has been running noticeably better since the deep clean.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
  },
];

export const faqs = [
  {
    question: "How quickly can I book an AC repair visit?",
    answer:
      "For most zones, we can confirm same-day or next-available visits quickly after you call or submit the form. Emergency repair requests are prioritized separately.",
  },
  {
    question: "Do you handle installation and uninstallation too?",
    answer:
      "Yes. We support new AC installation, replacement setup, relocation guidance, and service coordination for both indoor and outdoor units.",
  },
  {
    question: "What if my AC needs spare parts after inspection?",
    answer:
      "Our technician will explain the issue, confirm the recommended part or repair path, and share a transparent estimate before moving forward.",
  },
  {
    question: "Is gas refill always included in a service visit?",
    answer:
      "Not always. Gas refill is recommended when pressure or cooling diagnosis points to it. We avoid unnecessary top-ups and explain the reason first.",
  },
  {
    question: "Do you offer annual maintenance plans for offices or multiple units?",
    answer:
      "Yes. AMC plans can be structured for homes with several units, offices, retail, and commercial spaces that need recurring upkeep and priority support.",
  },
];

export const serviceOptions = services.map((service) => service.name);

export const serviceAreas = [
  "Downtown Core",
  "North Heights",
  "West Business Park",
  "Lakeview Residences",
  "Airport Corridor",
  "East Retail District",
  "Greenline Township",
  "South Industrial Hub",
];

export const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
