import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={hero}
        alt="Luxury perfume bottle on maroon velvet"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-ink)_92%,transparent)] via-[color-mix(in_srgb,var(--brand-maroon)_70%,transparent)] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-4 text-xs uppercase tracking-royal text-gold">
            <span className="h-px w-10 bg-gold" /> Parina Aura · Est. 1924
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-7xl">
            The Scent of <span className="text-gradient-gold italic">Royalty</span>, Bottled by Hand.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80">
            An exclusive maison of perfumery — rare extracts, golden craftsmanship,
            and fragrances composed for those who command a room without a word.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="rounded-full bg-gold px-9 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground shadow-gold transition-transform hover:scale-105"
            >
              Explore the Collection
            </a>
            <a
              href="#bundle"
              className="rounded-full border border-gold px-9 py-4 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-accent-foreground"
            >
              The Royal Box
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
