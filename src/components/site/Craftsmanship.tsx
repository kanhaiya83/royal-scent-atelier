const steps = [
  { step: "I", title: "Sourcing", text: "We travel to source rare extracts directly from heritage growers and distillers." },
  { step: "II", title: "Composition", text: "Our master perfumer blends each accord over months, never weeks." },
  { step: "III", title: "Maturation", text: "Every batch rests in darkness, allowing the notes to marry into harmony." },
  { step: "IV", title: "Hand-Finishing", text: "Bottles are filled, sealed and gilded by hand, then numbered." },
];

export function Craftsmanship() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 text-center">
        <p className="text-xs uppercase tracking-royal text-gold">The Craft</p>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          From Field to <span className="text-gradient-gold italic">Flacon</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="relative pl-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold font-display text-2xl shadow-gold">
              {s.step}
            </div>
            <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
