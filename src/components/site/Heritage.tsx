const stats = [
  { value: "100yr", label: "Of Perfumery" },
  { value: "37", label: "Rare Extracts" },
  { value: "100%", label: "Hand-Poured" },
  { value: "∞", label: "Devotion" },
];

export function Heritage() {
  return (
    <section id="heritage" className="relative mx-auto max-w-5xl px-6 py-28 text-center">
      <p className="text-xs uppercase tracking-royal text-gold">Our Heritage</p>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
        A century devoted to the art of fragrance, composed in deep maroon and
        finished in <span className="text-gradient-gold italic">gold</span>.
      </h2>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-foreground/75">
        Founded in a small atelier and perfected across generations, Parina Aura
        treats every bottle as a coronation. We source the rarest oud, distill our
        own rose absolutes, and pour each fragrance by hand — never compromising,
        never mass-produced.
      </p>

      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gold/25 bg-card p-6">
            <div className="font-display text-4xl text-gold">{s.value}</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
