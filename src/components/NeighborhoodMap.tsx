"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DFW_REGIONS } from "@/lib/neighborhoods";

// TODO: drop a real aerial/map photo of the DFW metroplex at
// public/images/dfw-aerial.jpg — it will be picked up automatically.
// Until then this falls back to a gradient placeholder.
const MAP_IMAGE = "/images/dfw-aerial.jpg";

export default function NeighborhoodMap() {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const activeRegion = DFW_REGIONS.find((r) => r.slug === active) ?? null;

  return (
    <div className="relative aspect-[8/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink-2 via-ink to-black">
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={MAP_IMAGE}
          alt="Aerial map of the Dallas-Fort Worth metroplex"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}

      {imgError && (
        <span className="absolute inset-0 flex items-center justify-center font-serif text-sm uppercase tracking-widest text-white/20">
          Aerial Map Photo Coming Soon
        </span>
      )}

      {/* darken so hover states / labels stay legible over any photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/40" />

      {/* drifting cloud layer for the aerial feel */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-cloud-drift-1 absolute -left-1/4 top-[5%] h-40 w-2/3 rounded-full bg-white/25 blur-3xl" />
        <div className="animate-cloud-drift-2 absolute left-1/3 top-[35%] h-32 w-1/2 rounded-full bg-white/15 blur-3xl" />
        <div className="animate-cloud-drift-3 absolute -left-1/3 top-[65%] h-36 w-2/3 rounded-full bg-white/20 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {DFW_REGIONS.map((region) => {
          const isActive = active === region.slug;
          return (
            <g key={region.slug}>
              <path
                d={region.path}
                fill={isActive ? "rgba(201,162,75,0.35)" : "rgba(255,255,255,0.04)"}
                stroke={isActive ? "rgba(227,199,133,0.9)" : "rgba(255,255,255,0.45)"}
                strokeWidth={isActive ? 2 : 1}
                className="cursor-pointer transition-colors duration-200"
                role="button"
                tabIndex={0}
                aria-label={`View ${region.name} homes`}
                onMouseEnter={() => setActive(region.slug)}
                onMouseLeave={() => setActive((cur) => (cur === region.slug ? null : cur))}
                onFocus={() => setActive(region.slug)}
                onBlur={() => setActive((cur) => (cur === region.slug ? null : cur))}
                onClick={() => setActive(region.slug)}
              />
              <text
                x={region.label.x}
                y={region.label.y}
                textAnchor="middle"
                className={`pointer-events-none select-none font-display uppercase transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
                style={{ fontSize: 13, letterSpacing: 1.5, fill: "white" }}
              >
                {region.name}
              </text>
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {activeRegion && (
          <motion.a
            key={activeRegion.slug}
            href="#contact"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 w-48 -translate-x-1/2 rounded-xl border border-white/10 bg-ink/95 p-3 shadow-xl backdrop-blur transition-colors hover:border-gold/60"
            style={{
              left: `${(activeRegion.label.x / 800) * 100}%`,
              top: `${(activeRegion.label.y / 500) * 100}%`,
              marginTop: 18,
            }}
            onMouseEnter={() => setActive(activeRegion.slug)}
            onMouseLeave={() => setActive((cur) => (cur === activeRegion.slug ? null : cur))}
          >
            <div className="flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-ink-2 to-black">
              <span className="font-serif text-[10px] uppercase tracking-widest text-white/25">
                Photo Coming Soon
              </span>
            </div>
            <p className="mt-2 font-serif text-sm font-semibold text-white">
              {activeRegion.name}
            </p>
            <p className="text-[11px] uppercase tracking-wide text-white/40">
              {activeRegion.county}
            </p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
              <span>Median {activeRegion.medianPrice}</span>
              <span className="font-semibold text-gold">View Homes →</span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
