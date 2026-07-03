import { getFeaturedListings } from "@/lib/listings";
import ListingCard from "@/components/ListingCard";
import Reveal from "@/components/Reveal";

export default function ListingsSection() {
  const listings = getFeaturedListings();
  const [featured, ...rest] = listings;

  return (
    <section id="listings" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Featured Listings
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Homes across the Metroplex
              </h2>
              <p className="mt-4 max-w-md text-sm text-stone">
                Sample listings shown below. Live MLS/IDX search connects here
                once an IDX provider is set up.
              </p>
            </div>

            <a
              href="#listings"
              className="group flex shrink-0 items-center gap-3 self-start rounded-full border border-ink/15 py-2 pl-5 pr-2 font-display text-xs font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:border-gold sm:self-auto"
            >
              View All
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </a>
          </div>
        </Reveal>

        {featured && (
          <Reveal delay={0.1} className="mt-12">
            <ListingCard listing={featured} featured />
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((listing, i) => (
              <Reveal key={listing.id} delay={0.2 + i * 0.1}>
                <ListingCard listing={listing} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
