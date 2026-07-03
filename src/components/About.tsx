import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            About Davante
          </p>

          <h2 className="mt-4 font-display leading-[0.9]">
            <span className="block text-4xl font-light uppercase tracking-[0.1em] text-ink/70 sm:text-5xl">
              Davante
            </span>
            <span className="block text-6xl font-bold uppercase tracking-[0.02em] text-gold sm:text-7xl">
              Alexander
            </span>
          </h2>

          <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
            {/* TODO: replace with real bio once brokerage/team details are finalized */}
            I&apos;m a Dallas-Fort Worth real estate agent focused on one
            thing: getting my clients the best possible outcome, whether
            that&apos;s buying, selling, or investing. No fluff, no pressure —
            just clear guidance and hard work on your behalf.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
            I know this market block by block, and I treat every deal like
            it&apos;s the only one I&apos;m working.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
            >
              Work With Me
            </a>
            <a
              href="#testimonials"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
            >
              See Client Reviews
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative order-1 md:order-2">
          <div
            aria-hidden
            className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border border-gold/40 sm:block"
          />
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-ink-2">
            <span className="font-serif text-sm uppercase tracking-widest text-white/40">
              Headshot Coming Soon
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
