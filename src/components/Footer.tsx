import Reveal from "@/components/Reveal";

const links = [
  { href: "#listings", label: "Listings" },
  { href: "#buyers-sellers", label: "Buyers & Sellers" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-ink-2 to-black text-white/70">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="font-serif text-sm uppercase tracking-[0.3em] text-white/10">
          DFW Skyline Coming Soon
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/40 sm:w-20" />
            <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Davante Alexander
            </p>
            <span className="h-px w-12 bg-gold/40 sm:w-20" />
          </div>
          <p className="mt-3 font-display text-xs uppercase tracking-[0.35em] text-gold/70">
            DFW Real Estate
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-xs uppercase tracking-[0.25em] text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          {/* TODO: replace with real, brokerage-approved neighborhood/SEO copy */}
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-white/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut
            enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-6">
            <a href="mailto:hello@davantealexander.com" className="hover:text-white">
              hello@davantealexander.com
            </a>
            <span className="hidden text-white/20 sm:inline">&middot;</span>
            <a href="tel:+14695550100" className="hover:text-white">
              (469) 555-0100
            </a>
          </div>
          {/* TODO: swap in brokerage name, logo, and license number once finalized */}
          <p className="mt-6 text-xs uppercase tracking-wider text-white/30">
            Brokerage name &amp; license # — add here
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Davante Alexander. All rights reserved.</p>
          <p>Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
