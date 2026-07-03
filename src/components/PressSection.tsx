import Reveal from "@/components/Reveal";

// TODO: swap these placeholders for real outlet logos once press
// mentions/features are secured.
const outlets = ["Publication", "Publication", "Publication", "Publication", "Publication"];

export default function PressSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            As Featured In
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-5">
            {outlets.map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center font-display text-sm uppercase tracking-[0.15em] text-stone/40 grayscale"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
