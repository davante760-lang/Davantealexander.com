import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Buyers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    points: ["Off-market access", "Local market strategy", "Skilled negotiation"],
  },
  {
    title: "Sellers",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    points: ["Pricing strategy", "Pro photography & staging", "Multi-channel marketing"],
  },
  {
    title: "Investors",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    points: ["Deal analysis", "Rental market insight", "Portfolio growth"],
  },
];

export default function Services() {
  return (
    <section id="buyers-sellers" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            How I Help
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold sm:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-black/5 bg-cream p-8 transition-shadow hover:shadow-lg">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
