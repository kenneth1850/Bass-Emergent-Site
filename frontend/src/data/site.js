// Central site content & company facts for Bass Crane Service, LLC
export const COMPANY = {
  name: "Bass Crane Service, LLC",
  short: "Bass Crane",
  tagline: "We Lift Richmond to New Heights",
  altTagline: "Bass Crane Lifts Richmond Higher",
  since: "1913",
  address: "1004 Holly Spring Ave., Richmond, VA 23224",
  addressLine1: "1004 Holly Spring Ave.",
  addressLine2: "Richmond, VA 23224",
  phone: "804-233-0113",
  phoneHref: "tel:+18042330113",
  fax: "804-233-9187",
  email: "info@basscrane.com",
  heroImage: "/images/hero.jpg",
  heroImageAlt: "Bass Crane 100-ton crane with boom raised against a dramatic morning sky on a Richmond jobsite",
  hours: "Mon–Fri, 7:30 AM – 4:00 PM",
  hoursShort: "Mon–Fri 7:30a–4:00p",
  serviceArea: "Richmond, VA, surrounding areas, and the Commonwealth of Virginia",
  logo: "/logo.svg",
  logoPng: "/logo.png",
  logoAlt: "Bass Crane Service, Richmond VA",
  mapEmbed:
    "https://www.google.com/maps?q=1004+Holly+Spring+Ave,+Richmond,+VA+23224&output=embed",
};

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Markets We Serve", to: "/markets" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    id: "crane-rental",
    num: "01",
    title: "Crane Rental",
    icon: "Crane",
    short: "Cranes of all sizes from 30-ton to 160-ton for residential and commercial projects.",
    long: "Cranes of all sizes from 30-ton to 160-ton, operated by CCO Certified Crane Operators for both residential and commercial projects.",
    placeholder: "PLACEHOLDER: 160-TON CRANE LIFT ON RICHMOND JOBSITE",
    image: "/images/service-crane-rental.jpg",
    imageAlt: "Bass Crane Link-Belt crane set up in a rock quarry",
  },
  {
    id: "boom-trucks",
    num: "02",
    title: "Boom Trucks",
    icon: "Truck",
    short: "Ideal for lightweight lifting jobs.",
    long: "Boom trucks ideal for lightweight lifting jobs where speed, access, and precision matter most.",
    placeholder: "PLACEHOLDER: BOOM TRUCK ON RESIDENTIAL SITE",
    image: "/images/service-boom-trucks.jpg",
    imageAlt: "Boom truck lifting materials over a residential home build",
  },
  {
    id: "rigging-hauling",
    num: "03",
    title: "Rigging & Hauling",
    icon: "Anchor",
    short: "Expertise in moving heavy equipment throughout Richmond and the Commonwealth of Virginia.",
    long: "An extensive rigging & hauling department with the expertise to move heavy equipment throughout Richmond and the Commonwealth of Virginia.",
    placeholder: "PLACEHOLDER: RIGGING CREW MOVING HEAVY EQUIPMENT",
    image: "/images/service-rigging-hauling.jpg",
    imageAlt: "Crane hook block and yellow rigging slings attached to a helicopter rotor head",
  },
  {
    id: "truck-rental",
    num: "04",
    title: "Truck Rental & Transport",
    icon: "TruckIcon",
    short: "Lowboys, equipment trailers, and rollbacks.",
    long: "Truck rental and transport with lowboys, equipment trailers, and rollbacks to move your machines where they need to be.",
    placeholder: "PLACEHOLDER: LOWBOY TRAILER LOADED WITH EQUIPMENT",
    image: "/images/service-truck-rental.jpg",
    imageAlt: "Bass Crane lowboy trailer transporting a military helicopter",
  },
  {
    id: "delivery-offloading",
    num: "05",
    title: "Delivery & Off-Loading",
    icon: "Package",
    short: "We take delivery of your equipment and resources, then off-load and deliver to your location.",
    long: "We take delivery of your equipment and resources, then off-load and deliver them precisely to your location.",
    placeholder: "PLACEHOLDER: OFF-LOADING EQUIPMENT AT DELIVERY SITE",
    image: "/images/service-delivery.jpg",
    imageAlt: "Bass Crane Kenworth truck delivering a cooling tower unit",
  },
  {
    id: "storage",
    num: "06",
    title: "Moving & Storage",
    icon: "Warehouse",
    short: "Secure storage solutions for equipment and materials.",
    long: "Moving and secure storage solutions to keep your equipment and materials protected between projects.",
    placeholder: "PLACEHOLDER: SECURE EQUIPMENT STORAGE YARD",
    image: "/images/service-storage.jpg",
    imageAlt: "Bass Crane fleet of cranes lined up in the equipment yard",
  },
];

export const MARKETS = [
  {
    num: "01",
    title: "Residential Contractors",
    desc: "Precise crane lifts for home builds, additions, and tree or structure removals across greater Richmond.",
  },
  {
    num: "02",
    title: "Commercial Contractors",
    desc: "Heavy-capacity cranes and crews to keep commercial builds on schedule and on budget.",
  },
  {
    num: "03",
    title: "Steel Erectors",
    desc: "Confident, certified lifts for setting beams, columns, and structural steel with safety first.",
  },
  {
    num: "04",
    title: "Carpentry Contractors",
    desc: "Lifting trusses, panels, and materials to elevation so your carpentry crews keep building.",
  },
  {
    num: "05",
    title: "HVAC Contractors",
    desc: "Setting rooftop units and heavy mechanical equipment safely and exactly where it belongs.",
  },
  {
    num: "06",
    title: "Roofing Contractors",
    desc: "Getting materials and equipment onto the roofline quickly so your crews stay productive.",
  },
];

export const VALUES = [
  "Safety First",
  "Done Right Every Time",
  "Family-Owned for 3 Generations",
  "24/7 Availability",
];

// Projects gallery. `tall` tiles are 3:4 portrait; the rest are 4:3.
// TODO: confirm titles/locations with Bass Crane before launch.
export const PROJECTS = [
  {
    tall: true,
    image: "/images/project-01.jpg",
    alt: "100-ton Bass Crane lifting a military helicopter from a lowboy trailer",
    title: "100-Ton Helicopter Lift",
    meta: "Rigging & Crane · Virginia",
  },
  {
    image: "/images/project-02.jpg",
    alt: "Two Bass Crane booms setting a highway sign structure at night",
    title: "160-Ton Highway Sign Replacement",
    meta: "VDOT · Night Lift with Riggers",
  },
  {
    image: "/images/project-03.jpg",
    alt: "Crane lifting a Sherman tank while trucks stand by",
    title: "Museum Tank Relocation",
    meta: "Rigging & Hauling",
  },
  {
    tall: true,
    image: "/images/project-04.jpg",
    alt: "Crane boom extended alongside a downtown Richmond tower",
    title: "Downtown High-Rise Lift",
    meta: "Commercial · Richmond, VA",
  },
  {
    image: "/images/project-05.jpg",
    alt: "Bass Crane lowboy loaded with a telehandler and lift equipment",
    title: "Equipment Transport",
    meta: "Lowboy & Trailer Service",
  },
  {
    image: "/images/project-06.jpg",
    alt: "Bass Crane working beside concrete plant silos",
    title: "Concrete Plant Maintenance",
    meta: "Industrial · Richmond, VA",
  },
  {
    tall: true,
    image: "/images/project-07.jpg",
    alt: "Bass Crane setting a highway sign under a full moon",
    title: "Overnight Sign Set",
    meta: "VDOT · Route 360",
  },
  {
    image: "/images/project-08.jpg",
    alt: "Bass Crane and trucks staged at a commercial building for a rooftop lift",
    title: "Rooftop Equipment Set",
    meta: "HVAC · Commercial",
  },
  {
    image: "/images/project-09.jpg",
    alt: "Crane and lowboy positioned to move a Sherman tank",
    title: "Heavy Machinery Move",
    meta: "Rigging & Hauling",
  },
];

export const ABOUT_IMAGES = {
  owners: {
    src: "/images/about-owners.jpg",
    alt: "Bass Crane Service owners standing in front of a Link-Belt crane",
  },
  team: {
    src: "/images/about-team.jpg",
    alt: "The Bass Crane Service crew gathered on a Sherman tank after a lift",
  },
};
