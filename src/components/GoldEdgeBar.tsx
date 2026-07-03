export default function GoldEdgeBar({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 ${
        side === "right" ? "right-0" : "left-0"
      } w-1.5 bg-gradient-to-b from-gold/0 via-gold to-gold/0 sm:w-2`}
    />
  );
}
