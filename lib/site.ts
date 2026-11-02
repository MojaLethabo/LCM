// Edit business details, services and clients here. No other file needs to change.
export const site = {
  name: "LCM Catering",
  phoneMain: "011 406 4075",
  phoneMainHref: "+27114064075",
  phoneMobile: "071 948 5977",
  phoneMobileHref: "+27719485977",
  whatsapp: "27650739340",
  email: "mac@lcmservices.co.za",
  emailInfo: "info@lcmservices.co.za",
  contact: "Mac Tladi Lebeko",
  address: "404 Southern Kliprivierberg Road, Safic Business Park, Alberton, Johannesburg",
  year: 2026,
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export const credentials = ["100% Black owned", "BEE Level One", "FEDHASA accredited"];

export const promises = [
  { title: "The right price", text: "Competitive pricing and excellent value for money." },
  { title: "The right quality", text: "Superior food and service, with safety guaranteed." },
  { title: "The right time", text: "On schedule for every meeting, event and delivery." },
  { title: "The right customer", text: "Food service for every person, culture, religion and race." },
];

export const services = [
  { title: "Conferences", text: "Tea, lunch and refreshments for full-day and multi-day events." },
  { title: "Boardrooms and meetings", text: "Plated or platter service, on time, every time." },
  { title: "Awards ceremonies", text: "Menus and service that match the occasion." },
  { title: "Functions and year-end events", text: "Celebrations for any crowd, culture, religion or dietary need." },
  { title: "Meal deliveries", text: "Regular or once-off meals, delivered to your site." },
  { title: "Bed and breakfast", text: "Guest accommodation, listed on Airbnb since 2019." },
];

export const facts = [
  { value: "100%", label: "Black owned" },
  { value: "34%", label: "Black female managed" },
  { value: "33%", label: "Youth enterprise development" },
];

// PHOTOS: save images in /public/images, then set src below, e.g. src: "/images/buffet.webp".
// While src is empty, a grey placeholder with the caption is shown.
export const photos = {
  services: { src: "/images/served.jpeg", alt: "A conference lunch being served", caption: "Photo needed: a conference lunch being served, 1000 × 1250" },
  about: { src: "", alt: "Mac Lebeko and the LCM kitchen team", caption: "Photo needed: Mac or the kitchen team, portrait, 1200 × 1500" },
};

export const gallery: { cls: string; caption: string; src?: string }[] = [
  { cls: "a", caption: "Buffet spread", src: "/Food/Pic 01.jpeg" },
  { cls: "b", caption: "Canapés and platters", src: "/Food/pic 02.jpeg" },
  { cls: "c", caption: "Plated main course", src: "/Food/pic 03.jpeg" },
  { cls: "d", caption: "Conference setup", src: "/Food/pic 04.jpeg" },
  { cls: "e", caption: "Our kitchen team", src: "/Food/pic 05.jpeg" },
  { cls: "f", caption: "Dessert table", src: "/Food/pic 06.jpeg" },
];

// To show a logo, drop the file in /public/logos and set logo, e.g. "/logos/transnet-freight-rail.png".
export const clients: { name: string; logo?: string }[] = [
  { name: "Transnet Freight Rail", logo :"/partners/Transnet Freight Rail.png" },
  { name: "Transnet School of Rail", logo :"/partners/Transnet School of Rail.png" },
  { name: "Aveng Grinaker-LTA", logo :"/partners/Aveng Grinaker-LTA.jpg" },
  { name: "Group Five", logo :"/partners/Group Five.jpg" },
  { name: "Unitrans", logo :"/partners/Unitrans.png" },
  { name: "Red Bull SA", logo :"/partners/Red Bull SA.jpg" },
  { name: "ERWAT", logo :"/partners/ERWAT.png" },
  { name: "Safic", logo :"/partners/Safic.jpg" },
  { name: "Floorworx", logo :"/partners/Floorworx.png" },
  { name: "Accentuate", logo :"/partners/Accentuate.png" },
  { name: "Cobra Projects", logo :"/partners/Cobra Projects.jpg" },
  { name: "Rolfes Group Companies", logo :"/partners/Rolfes Group Companies.png" },
];

export const eventTypes = [
  "Conference",
  "Boardroom or meeting",
  "Awards ceremony",
  "Function or year-end",
  "Meal delivery",
  "Other",
];
