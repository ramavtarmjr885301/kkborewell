const services = [
  {
    title: "Submersible Pump — Boring & Installation",
    desc: "End-to-end borewell drilling with submersible pump set installation. Our core specialisation.",
    tag: "SPECIALIST",
  },
  {
    title: "Pump Automation",
    desc: "Auto start/stop controllers and level sensors so your pump switches on and off on its own.",
    tag: "AUTOMATION",
  },
  {
    title: "Mono Block & Industrial Pumps",
    desc: "Supply, fitting and servicing of mono block pumps and industrial-grade pumps and motors.",
    tag: "INDUSTRIAL",
  },
  {
    title: "Rain Water Harvesting",
    desc: "Recharge pit and borewell recharge systems to capture rainwater and restore the water table.",
    tag: "HARVESTING",
  },
  {
    title: "Earthing",
    desc: "Proper earthing for pump motors and control panels to keep your setup safe from electrical faults.",
    tag: "SAFETY",
  },
  {
    title: "Deburring",
    desc: "Deburring of pipes and fittings for a clean, leak-free finish before installation.",
    tag: "FINISHING",
  },
  {
    title: "Pump Repairing",
    desc: "Diagnosis and repair of submersible, mono block and industrial pumps that have stopped working.",
    tag: "REPAIR",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-(--color-well-900) py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-(--color-aqua-400)">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Services, not sales
          </h2>
          <p className="mt-4 font-body text-white/70">
            We don&apos;t sell pumps off a shelf — we install, automate, wire and
            repair them at your site. Every job below is work we do with our
            own hands.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-(--color-aqua-400)/50 hover:bg-white/[0.06]"
            >
              <span className="font-mono text-[11px] tracking-widest text-(--color-rust-400)">
                {s.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
