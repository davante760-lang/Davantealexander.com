import GoldEdgeBar from "@/components/GoldEdgeBar";
import Reveal from "@/components/Reveal";

// TODO: replace the gradient placeholder with a full-bleed listing/lifestyle
// photo once real photography is available.
export default function FullBleedShowcase() {
  return (
    <section className="relative flex h-[70vh] min-h-[460px] w-full items-end overflow-hidden bg-gradient-to-br from-ink via-ink-2 to-black">
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="font-serif text-sm uppercase tracking-[0.3em] text-white/20">
          Property Photography Coming Soon
        </span>
      </div>
      <GoldEdgeBar side="right" />

      <Reveal className="relative w-full px-6 pb-14 sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Signature Listings
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl">
          Lorem ipsum <span className="text-gold-light">dolor sit amet.</span>
        </h2>
      </Reveal>
    </section>
  );
}
