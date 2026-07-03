// Mock listing data, shaped to match the fields most IDX/MLS feeds expose
// (IDX Broker, Showcase IDX, SimplyRETS, etc. all return roughly this shape).
//
// INTEGRATION POINT: once an IDX/MLS provider is chosen, replace
// `getFeaturedListings()` with a real fetch to that provider's API/widget
// feed. The rest of the UI (ListingsSection, ListingCard) can stay as-is
// as long as the returned objects match the `Listing` type below.

export type Listing = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "For Sale" | "Pending" | "Sold";
};

const MOCK_LISTINGS: Listing[] = [
  {
    id: "sample-1",
    address: "1200 Example Ave",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    price: 549000,
    beds: 4,
    baths: 3,
    sqft: 2840,
    status: "For Sale",
  },
  {
    id: "sample-2",
    address: "480 Sample St",
    city: "Fort Worth",
    state: "TX",
    zip: "76102",
    price: 389000,
    beds: 3,
    baths: 2,
    sqft: 2110,
    status: "For Sale",
  },
  {
    id: "sample-3",
    address: "77 Placeholder Ln",
    city: "Frisco",
    state: "TX",
    zip: "75034",
    price: 725000,
    beds: 5,
    baths: 4,
    sqft: 3620,
    status: "Pending",
  },
];

export function getFeaturedListings(): Listing[] {
  return MOCK_LISTINGS;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
