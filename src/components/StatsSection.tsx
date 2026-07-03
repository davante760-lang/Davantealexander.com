import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

// TODO: replace placeholder counter values with real production numbers
const stats = [
  { kind: "counter" as const, value: 150, suffix: "+", label: "Homes Closed" },
  { kind: "counter" as const, value: 210, suffix: "M", prefix: "$", label: "Sales Volume" },
  { kind: "counter" as const, value: 21, label: "Avg. Days on Market" },
  { kind: "counter" as const, value: 500, suffix: "+", label: "Happy Clients" },
  { kind: "counter" as const, value: 5, decimals: 1, suffix: "★", label: "Client Rating" },
  { kind: "static" as const, value: "DFW", label: "Metroplex Coverage" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="relative mx-auto flex max-w-6xl">
        <div
          aria-hidden
          className="hidden shrink-0 items-center justify-center pl-6 sm:flex"
        >
          <p className="origin-center -rotate-180 whitespace-nowrap font-display text-xs uppercase tracking-[0.4em] text-gold/60 [writing-mode:vertical-rl]">
            Why Work With Me
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 border-l border-white/10 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-center border-b border-r border-white/10 px-6 py-14 sm:px-8 sm:py-16">
                <div className="font-display text-6xl font-semibold tracking-wide text-white sm:text-7xl lg:text-8xl">
                  {stat.kind === "counter" ? (
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
