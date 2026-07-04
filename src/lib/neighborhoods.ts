// Data for the interactive DFW metroplex map (NeighborhoodMap component).
//
// `path` is an SVG path string plotted against the map's 800x500 viewBox.
// `label` is where the name/hover-card anchors.
//
// These outlines are derived from real surveyed city-limit boundaries
// (US Census Bureau TIGER/Line "Incorporated Places" layer, current
// vintage, via the TIGERweb REST service), not hand-drawn approximations:
//   1. Pulled each city's polygon geometry (lon/lat) from TIGERweb layer 28.
//   2. Kept each city's largest ring (drops small annexation exclaves).
//   3. Projected lon/lat to a local plane (equirectangular, scaled by
//      cos(lat) at the DFW-wide mean latitude) so shapes aren't stretched.
//   4. Fit the combined bounding box of all seven cities into the 800x500
//      viewBox, preserving relative position/scale between cities.
//   5. Simplified each ring with Douglas-Peucker (epsilon proportional to
//      each city's own bounding-box diagonal) to keep paths lightweight
//      while remaining recognizably true to the real boundary shape.
// Regenerate by re-running that pipeline if the underlying TIGER vintage
// changes or more cities are added.
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
    path: "M317.4,125.5 L326.7,128.7 L326.6,145.3 L321.6,145.2 L321.2,158.4 L327.3,159.4 L330.0,150.0 L337.1,154.1 L337.8,163.5 L347.5,157.1 L374.6,175.8 L405.3,189.1 L424.6,187.4 L426.4,169.3 L422.4,167.2 L422.0,151.1 L417.5,151.2 L416.9,132.9 L394.6,132.5 L394.7,141.9 L390.7,138.5 L373.0,145.7 L371.9,140.6 L356.3,144.0 L356.3,140.4 L360.5,140.4 L356.0,137.2 L356.6,131.5 L339.5,134.6 L336.7,127.0 L327.4,126.5 L319.7,120.5 Z",
    label: { x: 380.7, y: 156.6 },
  },
  {
    slug: "southlake",
    name: "Southlake",
    county: "Tarrant County",
    blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    medianPrice: "$875K",
    path: "M333.8,219.0 L333.8,223.6 L342.2,223.7 L345.3,227.5 L352.5,225.7 L359.5,229.9 L372.2,228.7 L372.6,231.7 L385.6,223.2 L383.0,223.2 L383.0,220.5 L389.4,217.9 L384.0,213.3 L385.5,206.2 L379.4,206.1 L379.9,196.4 L374.0,196.5 L375.5,185.8 L370.5,182.8 L370.5,178.1 L357.8,171.1 L352.8,171.0 L352.3,188.0 L355.5,192.7 L352.3,193.2 L351.4,196.2 L347.0,196.2 L346.6,198.9 L342.9,198.9 L343.0,209.9 L333.9,209.9 Z",
    label: { x: 361.5, y: 206.3 },
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin County",
    blurb: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    medianPrice: "$560K",
    path: "M481.7,92.4 L482.9,96.4 L487.7,92.1 L489.1,96.5 L496.7,94.3 L491.1,102.3 L500.3,103.2 L498.3,110.4 L502.5,115.5 L503.3,111.6 L518.5,111.0 L517.3,126.8 L582.0,99.1 L582.0,59.1 L577.5,59.1 L577.4,63.7 L563.5,63.5 L566.4,59.1 L563.8,40.7 L570.1,40.6 L571.9,45.4 L572.8,40.5 L500.4,40.1 L495.8,45.0 L504.1,49.7 L500.6,58.5 L503.2,75.4 L498.7,82.7 L487.5,80.7 L486.3,89.3 Z",
    label: { x: 535.7, y: 79.1 },
  },
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    blurb: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    medianPrice: "$495K",
    path: "M515.0,150.8 L518.9,161.4 L527.9,160.5 L523.6,167.3 L551.7,170.5 L563.5,178.0 L596.5,175.1 L617.8,179.5 L617.9,175.2 L645.2,174.7 L630.4,165.8 L631.4,144.8 L622.5,144.5 L622.7,130.8 L607.4,133.3 L598.1,122.6 L580.0,123.8 L582.2,99.0 L519.1,126.1 L516.4,139.6 L523.9,142.5 L515.7,144.4 Z",
    label: { x: 573.3, y: 146.3 },
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    county: "Tarrant County",
    blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    medianPrice: "$365K",
    path: "M124.3,338.3 L139.3,381.1 L161.1,378.5 L165.9,353.5 L190.9,364.7 L184.1,380.9 L166.3,382.2 L167.0,410.2 L175.1,383.0 L196.9,374.7 L188.4,354.7 L203.0,351.7 L199.9,374.3 L223.7,369.6 L192.9,389.7 L218.1,411.3 L197.9,415.8 L212.1,422.2 L208.1,444.2 L236.0,444.6 L254.2,419.9 L275.5,460.0 L315.9,459.4 L313.9,439.8 L315.7,459.1 L280.8,453.7 L303.0,411.5 L285.5,418.6 L282.2,409.5 L317.4,400.4 L311.5,390.0 L290.7,398.6 L287.2,373.5 L318.8,386.4 L325.3,349.5 L346.0,347.1 L379.3,314.4 L371.5,301.6 L409.9,292.6 L422.7,310.7 L423.2,279.2 L287.6,315.3 L288.0,265.0 L302.1,260.6 L300.6,219.3 L315.9,185.0 L304.8,165.9 L292.3,168.1 L303.6,151.4 L277.8,159.5 L272.1,147.0 L258.4,174.6 L254.4,164.9 L218.9,176.2 L231.4,177.8 L231.6,193.4 L217.4,204.5 L243.2,232.0 L193.9,230.5 L212.3,235.9 L207.5,244.5 L200.8,235.7 L216.1,267.2 L210.0,285.9 L193.3,263.2 L165.9,265.2 L198.0,292.3 L176.7,293.2 L178.2,314.6 L160.3,321.7 L164.0,352.9 L139.5,333.8 L141.2,317.7 L138.8,335.9 Z",
    label: { x: 256.4, y: 312.3 },
  },
  {
    slug: "arlington",
    name: "Arlington",
    county: "Tarrant County",
    blurb: "Neque porro quisquam est qui dolorem ipsum quia dolor sit.",
    medianPrice: "$310K",
    path: "M317.6,370.7 L318.8,386.4 L326.9,393.6 L332.5,386.7 L331.9,393.3 L341.3,399.9 L335.0,411.7 L345.6,423.6 L359.4,418.9 L379.6,423.8 L385.2,420.6 L399.6,435.1 L411.7,380.8 L408.3,363.9 L415.9,362.4 L416.7,348.6 L411.1,344.1 L421.4,332.1 L416.8,325.8 L407.8,326.6 L409.8,292.6 L371.5,301.6 L379.3,314.4 L368.0,314.3 L346.0,347.1 L330.1,352.5 L325.3,349.5 L326.9,365.9 Z",
    label: { x: 374.8, y: 366.5 },
  },
  {
    slug: "dallas",
    name: "Dallas",
    county: "Dallas County",
    blurb: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    medianPrice: "$450K",
    path: "M441.0,414.9 L452.8,404.2 L453.8,415.1 L465.7,408.4 L469.8,416.3 L480.2,380.9 L497.6,380.9 L498.4,399.2 L511.9,408.2 L545.2,398.0 L575.4,417.3 L586.4,384.8 L599.8,378.4 L628.1,406.0 L646.5,387.9 L659.7,399.0 L653.2,384.4 L675.0,374.1 L665.2,364.1 L632.3,369.9 L631.5,331.3 L607.7,308.2 L620.2,281.5 L633.4,276.2 L604.9,254.0 L596.3,221.0 L573.7,225.9 L577.6,218.8 L562.9,215.5 L569.3,177.5 L511.7,170.4 L507.0,184.2 L531.4,185.8 L541.5,212.0 L534.1,209.0 L534.3,223.9 L489.4,233.2 L487.7,243.3 L473.9,231.9 L470.0,198.8 L482.1,241.2 L477.1,258.6 L499.0,281.7 L494.6,304.5 L480.0,314.6 L479.4,338.0 L444.7,344.2 L454.5,356.1 Z",
    label: { x: 549.3, y: 315.0 },
  },
];
