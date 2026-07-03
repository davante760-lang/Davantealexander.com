import type { Listing } from "@/lib/listings";
import { formatPrice } from "@/lib/listings";

export default function ListingCard({
  listing,
  featured = false,
}: {
  listing: Listing;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex w-full items-end overflow-hidden rounded-2xl bg-gradient-to-br from-ink-2 to-ink ${
        featured ? "aspect-[4/3] sm:aspect-[16/9]" : "aspect-[4/5] sm:aspect-[4/3]"
      }`}
    >
      {/* placeholder photo layer */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-10 transition-transform duration-500 ease-out group-hover:scale-105 sm:items-center sm:pt-0">
        <span className="font-serif text-sm uppercase tracking-widest text-white/25">
          Photo Coming Soon
        </span>
      </div>

      {/* scrim for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

      <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
        {listing.status}
      </span>

      <div className="relative w-full p-6 sm:p-7">
        <span className="mb-3 block h-px w-10 bg-gold" />
        <p
          className={`font-display font-bold text-white ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {formatPrice(listing.price)}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </p>

        <div className="mt-4 flex gap-4 text-xs uppercase tracking-wide text-white/50">
          <span>{listing.beds} bd</span>
          <span>{listing.baths} ba</span>
          <span>{listing.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </article>
  );
}
