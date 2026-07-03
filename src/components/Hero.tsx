import GoldEdgeBar from "@/components/GoldEdgeBar";
import Reveal from "@/components/Reveal";

const serviceAreas = ["Dallas", "Fort Worth", "Plano", "Frisco", "Arlington"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
      />
      <GoldEdgeBar side="right" />

      <Reveal
        delay={0.5}
        className="pointer-events-none absolute right-14 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
      >
        <p className="mb-1 font-display text-xs uppercase tracking-[0.3em] text-white/40">
          Service Areas
        </p>
        {serviceAreas.map((area) => (
          <div key={area} className="border-b border-gold/40 pb-2 text-right">
            <span className="font-display text-sm uppercase tracking-[0.3em] text-white/70">
              {area}
            </span>
          </div>
        ))}
      </Reveal>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Dallas &middot; Fort Worth &middot; The Metroplex
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-balance sm:text-6xl">
            Move through DFW real estate like you{" "}
            <span className="italic text-gold-light">own the market.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            I help buyers, sellers, and investors across Dallas-Fort Worth close
            with confidence — sharp negotiation, real local knowledge, and zero
            guesswork.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#listings"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Search DFW Listings
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Get a Free Home Valuation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
