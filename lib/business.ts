export const business = {
  name: "K.K. Borewell and Pumps",
  owner: "Kishan Kumar",
  phone: "9760196371",
  phoneDisplay: "+91 9760196371",
  email: "help-kkborewell@gmail.com",
  address: "Sector Eta-1, Pocket D,Greater Noida, G.B. Nagar, Uttar Pradesh 201308",
  whatsappBase: "https://wa.me/919760196371",
};

export function waLink(message: string) {
  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string, body: string) {
  return `mailto:${business.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export type Service = {
  slug: string;
  tag: string;
  title: string;
  short: string;
  long: string;
  equipment: string[];
};

export const services: Service[] = [
  {
    slug: "submersible-pump-boring",
    tag: "SPECIALIST",
    title: "Submersible Pump — Boring & Installation",
    short:
      "End-to-end borewell drilling with submersible pump set installation. Our core specialisation.",
    long: "We drill and case the borehole to the depth your site needs, then fit and commission the submersible pump set — this is the work our name is built on.",
    equipment: ["submersible-pump", "casing-pipe", "drill-rig"],
  },
  {
    slug: "pump-automation",
    tag: "AUTOMATION",
    title: "Pump Automation",
    short:
      "Auto start/stop controllers and level sensors so your pump switches on and off on its own.",
    long: "Automation panels and float/level sensors are wired in so the pump starts and stops on its own — no manual switching, no dry-run risk.",
    equipment: ["control-panel", "level-sensor"],
  },
  {
    slug: "mono-block-industrial-pumps",
    tag: "INDUSTRIAL",
    title: "Mono Block & Industrial Pumps",
    short:
      "Supply, fitting and servicing of mono block pumps and industrial-grade pumps and motors.",
    long: "From single-phase mono block sets to larger industrial pump-and-motor combinations, we fit and service the equipment your site actually runs.",
    equipment: ["mono-block-pump", "industrial-motor"],
  },
  {
    slug: "rain-water-harvesting",
    tag: "HARVESTING",
    title: "Rain Water Harvesting",
    short:
      "Recharge pit and borewell recharge systems to capture rainwater and restore the water table.",
    long: "Recharge pits and borewell-recharge fittings are built to route rainwater back underground, helping the water table recover over time.",
    equipment: ["recharge-pit", "filter-chamber"],
  },
  {
    slug: "earthing",
    tag: "SAFETY",
    title: "Earthing",
    short:
      "Proper earthing for pump motors and control panels to keep your setup safe from electrical faults.",
    long: "Earthing rods and cabling are installed to code for pump motors and control panels, so an electrical fault doesn't become a shock hazard.",
    equipment: ["earthing-rod", "earth-cable"],
  },
  {
    slug: "deburring",
    tag: "FINISHING",
    title: "Deburring",
    short:
      "Deburring of pipes and fittings for a clean, leak-free finish before installation.",
    long: "Cut pipes and fittings are deburred and cleaned before installation, so joints seal properly and don't leak or trap debris.",
    equipment: ["pipe-fittings", "deburring-tool"],
  },
  {
    slug: "pump-repairing",
    tag: "REPAIR",
    title: "Pump Repairing",
    short:
      "Diagnosis and repair of submersible, mono block and industrial pumps that have stopped working.",
    long: "We open up, diagnose and repair submersible, mono block and industrial pumps on site or at our workshop, whatever the brand.",
    equipment: ["pump-motor", "spares"],
  },
];