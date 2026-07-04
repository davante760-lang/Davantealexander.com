// Data for the interactive DFW metroplex map (NeighborhoodMap component).
//
// `path` is an SVG path string plotted against the map's 800x500 viewBox.
// `label` is where the name/hover-card anchors. These are simplified,
// stylized region outlines (not surveyed city-limit boundaries) — meant to
// read clearly at metroplex scale, the same way most real estate "explore
// neighborhoods" maps simplify city limits into clean hoverable shapes.
//
// TODO: swap `photo` placeholders for real listing/lifestyle photography
// per area once available, and replace `bgImage` in NeighborhoodMap with
// the real aerial/map photo once supplied.

export type MapRegion = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  medianPrice: string;
  path: string;
  label: { x: number; y: number };
};

export const DFW_REGIONS: MapRegion[] = [
  {
    slug: "flower-mound",
    name: "Flower Mound",
    county: "Denton County",
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    medianPrice: "$540K",
    path: "M140,40 L265,28 L300,105 L255,150 L165,155 L120,105 Z",
    label: { x: 205, y: 95 },
  },
  {
    slug: "southlake",
    name: "Southlake",
    county: "Tarrant County",
    blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    medianPrice: "$875K",
    path: "M255,150 L300,105 L400,95 L440,175 L385,230 L300,225 L260,190 Z",
    label: { x: 340, y: 165 },
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin County",
    blurb: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    medianPrice: "$560K",
    path: "M390,15 L525,5 L555,90 L470,115 L400,95 Z",
    label: { x: 475, y: 60 },
  },
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    blurb: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    medianPrice: "$495K",
    path: "M470,115 L555,90 L610,170 L595,240 L500,235 L440,175 Z",
    label: { x: 525, y: 175 },
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    county: "Tarrant County",
    blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    medianPrice: "$365K",
    path: "M20,225 L160,195 L230,250 L220,375 L130,445 L25,400 Z",
    label: { x: 120, y: 320 },
  },
  {
    slug: "arlington",
    name: "Arlington",
    county: "Tarrant County",
    blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit.",
    medianPrice: "$310K",
    path: "M230,250 L300,225 L385,230 L410,320 L360,405 L260,390 L220,375 Z",
    label: { x: 320, y: 315 },
  },
  {
    slug: "dallas",
    name: "Dallas",
    county: "Dallas County",
    blurb: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    medianPrice: "$450K",
    path: "M410,320 L500,235 L595,240 L640,290 L620,390 L500,420 L395,395 L360,405 Z",
    label: { x: 510, y: 330 },
  },
];
