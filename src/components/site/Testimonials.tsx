const reviews = [
  {
    quote: "I have worn fragrances from every great house. None has commanded a room like L'Or Souverain.",
    name: "Isabella V.",
    role: "Collector, Monaco",
  },
  {
    quote: "The Royal Box arrived like a piece of treasure. The diffuser alone transformed my study.",
    name: "Reza A.",
    role: "Architect, Dubai",
  },
  {
    quote: "The pocket perfume never leaves my side. A whisper of royalty wherever the day takes me.",
    name: "Camille D.",
    role: "Gallerist, Paris",
  },
];

export function Testimonials() {
  return (
    <section className="bg-card py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-royal text-gold">Whispers of Approval</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Worn by the <span className="text-gradient-gold italic">Discerning</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-gold/25 bg-royal p-8 shadow-royal"
            >
              <div className="text-gold text-xl tracking-widest">★★★★★</div>
              <blockquote className="mt-5 flex-1 font-display text-xl italic leading-relaxed text-foreground/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/20 pt-4">
                <span className="block font-display text-lg text-gold">{r.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
