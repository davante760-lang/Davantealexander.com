import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import NeighborhoodMap from "@/components/NeighborhoodMap";

export const metadata: Metadata = {
  title: "Neighborhood Guides",
  description:
    "Explore neighborhoods across the Dallas-Fort Worth metroplex — hover the map to preview each area.",
};

export default function NeighborhoodsPage() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Neighborhood Guides
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-3xl font-semibold sm:text-4xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="mt-4 max-w-lg text-sm text-stone">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            — hover or tap a region below to preview the area.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <NeighborhoodMap />
        </Reveal>
      </div>
    </section>
  );
}
