import GoldEdgeBar from "@/components/GoldEdgeBar";
import Reveal from "@/components/Reveal";

// TODO: replace the gradient placeholder with a real dramatic portrait
// (b&w or moody color grade) once professional photography is available.
export default function PortraitMoment() {
  return (
    <section className="relative flex h-screen max-h-[900px] min-h-[560px] w-full items-center overflow-hidden bg-black">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-ink"
      />
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="font-serif text-sm uppercase tracking-[0.3em] text-white/15">
          Portrait Coming Soon
        </span>
      </div>
      <GoldEdgeBar side="left" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Meet Davante
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-6xl">
          Sed ut perspiciatis unde omnis iste natus.
        </h2>
      </Reveal>
    </section>
  );
}
