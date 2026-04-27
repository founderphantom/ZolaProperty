export const SITE = {
  name: "ZOLA Property Management",
  shortName: "ZOLA",
  tagline: "Ontario's Trusted Leasing Experts",
  description:
    "ZOLA Property Management places AAA tenants in GTA rental properties — fast. Full-service marketing, showings, screening, and lease prep with no upfront fees.",
  url: "https://www.zolapropertymanagement.com",
  email: "info@zolapropertymanagement.com",
  phone: "437-448-6162",
  phoneHref: "tel:+14374486162",
  smsHref: "sms:+14374486162",
  address: {
    region: "Greater Toronto Area",
    locality: "Toronto",
    administrativeArea: "ON",
    country: "CA",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    google: "https://www.google.com/maps",
  },
  hours: "Mon–Sun • Call or text anytime",
};

export const NAV = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/reviews", label: "Reviews" },
  { href: "/recently-leased", label: "Recently Leased" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROPERTY_TYPES = [
  { slug: "condos", label: "Condos", img: "/images/property-types/condos.jpg" },
  { slug: "basement-apartments", label: "Basement Apartments", img: "/images/property-types/basement.jpg" },
  { slug: "detached-homes", label: "Detached Homes", img: "/images/property-types/detached.jpg" },
  { slug: "semi-detached-homes", label: "Semi-Detached Homes", img: "/images/property-types/semi.jpg" },
  { slug: "townhouses", label: "Townhouses", img: "/images/property-types/townhouse.jpg" },
  { slug: "multi-unit", label: "Multi-Unit Properties", img: "/images/property-types/multi.jpg" },
];

export const AREAS = [
  "Toronto", "North York", "Scarborough", "Etobicoke", "East York", "York",
  "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill",
  "Aurora", "Newmarket", "Oakville", "Burlington", "Milton",
  "Ajax", "Pickering", "Whitby", "Oshawa", "Barrie",
];

export const TESTIMONIALS = [
  { name: "Jason L.", location: "Toronto, ON", quote: "ZOLA found amazing tenants for my condo in 10 days! Super professional and easy to work with.", rating: 5 },
  { name: "Sarah M.", location: "Markham, ON", quote: "Best decision I made. They handle everything and the tenants they find are always high quality.", rating: 5 },
  { name: "David R.", location: "Brampton, ON", quote: "My unit was vacant for months. Zola rented it in less than 2 weeks. Highly recommend!", rating: 5 },
  { name: "Mike D.", location: "Vaughan, ON", quote: "Professional, responsive, and they truly care about finding the right tenant.", rating: 5 },
];

export const RECENTLY_LEASED = [
  { address: "Davenport Rd, Toronto", img: "/images/leased/davenport.jpg" },
  { address: "Codrington St, Barrie", img: "/images/leased/codrington.jpg" },
  { address: "Collier St, Toronto", img: "/images/leased/collier.jpg" },
];

export const FAQS = [
  { q: "How fast can you rent my property?", a: "Our average time to place an AAA tenant in the GTA is 14 days, compared to the market average of 30–45 days. Many properties are leased in under two weeks." },
  { q: "What does your service include?", a: "Professional photography, high-converting ads on Kijiji, Facebook Marketplace and rental platforms, all showings, full tenant screening (credit, employment, references, identity verification), and lease preparation." },
  { q: "Do I have to sign a long-term contract?", a: "No. We work on flexible engagements. You only pay once a qualified tenant signs the lease — there are no upfront fees." },
  { q: "How much does it cost?", a: "Pricing depends on the service tier (tenant placement vs. full management) and the property. We'll give you transparent pricing on your free strategy call." },
  { q: "What areas do you serve?", a: "We serve the entire Greater Toronto Area — Toronto, North York, Scarborough, Etobicoke, Markham, Vaughan, Brampton, Mississauga, Oakville, Barrie and more — plus Ontario-wide support through our trusted partner network." },
  { q: "What types of properties do you manage?", a: "Condos, basement apartments, detached and semi-detached homes, townhouses, and multi-unit properties." },
  { q: "How is your pricing structured?", a: "Tenant placement is a one-time fee paid only after the lease is signed. Full management is a small percentage of monthly rent. No hidden fees." },
  { q: "Do you work with out-of-country landlords?", a: "Yes. A large portion of our clients live abroad or out of province. We handle every step on the ground so you don't have to." },
  { q: "Can you accommodate weekend showings?", a: "Yes. We schedule showings 7 days a week to maximize qualified applicants." },
  { q: "How do you spot fake pay stubs and rental fraud?", a: "Every applicant goes through SingleKey-powered screening: credit checks, employer verification, identity validation, and document fraud detection." },
];

export const PROPERTY_TYPE_OPTIONS = [
  "Condo", "Basement Apartment", "Detached Home", "Semi-Detached Home", "Townhouse", "Multi-Unit Property", "Other",
];
