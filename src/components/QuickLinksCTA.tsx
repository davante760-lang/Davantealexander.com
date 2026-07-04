import Reveal from "@/components/Reveal";

const links = [
  {
    label: "Buy a Home",
    href: "#listings",
    icon: (
      <path d="M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    ),
  },
  {
    label: "Sell a Home",
    href: "#contact",
    icon: (
      <>
        <path d="M3 21h18M6 21V9l6-4 6 4v12" />
        <path d="M10 21v-6h4v6" />
      </>
    ),
  },
  {
    label: "Invest",
    href: "#buyers-sellers",
    icon: <path d="M3 3v18h18M7 15l4-5 3 3 5-7" />,
  },
  {
    label: "Home Valuation",
    href: "#contact",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
  },
  {
    label: "Neighborhoods",
    href: "/neighborhoods",
    icon: (
      <>
        <path d="M12 2 2 21h20L12 2Z" />
        <path d="M12 10v6" />
      </>
    ),
  },
];

// TODO: swap the gradient background for a full-bleed DFW skyline/lifestyle
// photo once real photography is available.
export default function QuickLinksCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-2 to-ink py-16">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex flex-col items-center gap-4 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 text-gold transition-colors group-hover:border-gold">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {link.icon}
                  </svg>
                </span>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-white">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
