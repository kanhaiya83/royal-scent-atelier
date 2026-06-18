const items = [
  "Exclusive Maison",
  "Hand-Poured",
  "Rare Extracts",
  "Cruelty Free",
  "Crafted in Gold",
  "Limited Editions",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-gold/30 bg-card py-4 overflow-hidden">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-12">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-sm uppercase tracking-[0.3em] text-gold-pale/80"
          >
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
