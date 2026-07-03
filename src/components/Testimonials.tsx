"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GoldEdgeBar from "@/components/GoldEdgeBar";
import Reveal from "@/components/Reveal";

// TODO: replace with real client testimonials
const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "Client Name",
    detail: "Buyer — Dallas, TX",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Client Name",
    detail: "Seller — Fort Worth, TX",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Client Name",
    detail: "Investor — Frisco, TX",
  },
  {
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    name: "Client Name",
    detail: "Buyer — Plano, TX",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function go(direction: 1 | -1) {
    setIndex((i) => (i + direction + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-24 text-white">
      <GoldEdgeBar side="right" />

      <div
        aria-hidden
        className="hidden absolute right-10 top-1/2 -translate-y-1/2 lg:block"
      >
        <p className="origin-center -rotate-180 whitespace-nowrap font-display text-xs uppercase tracking-[0.4em] text-white/20 [writing-mode:vertical-rl]">
          Client Reviews
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Client Reviews
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold sm:text-4xl">
            Sed ut perspiciatis unde omnis iste.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-16">
          <Reveal delay={0.1}>
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-br from-ink-2 to-black">
              <span className="font-serif text-xs uppercase tracking-widest text-white/25">
                Client Photo
              </span>
            </div>
          </Reveal>

          <div>
            <div className="min-h-[220px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-serif text-2xl leading-snug text-balance text-white sm:text-3xl">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                  <p className="mt-6 text-sm">
                    <span className="font-semibold text-white">{current.name}</span>
                    <span className="text-white/50"> — {current.detail}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-white/40">
                {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
