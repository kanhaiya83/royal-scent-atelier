import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={hero}
        alt="Luxury perfume bottle on royal red velvet"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* readability scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-ink)_94%,transparent)] via-[color-mix(in_srgb,var(--brand-ink)_55%,transparent)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-[color-mix(in_srgb,var(--brand-ink)_40%,transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="mb-7 flex items-center gap-4 text-xs uppercase tracking-royal text-gold">
            <span className="h-px w-12 bg-gold" /> Parina Aura · Est. 1924
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-7xl">
            The Scent of <span className="text-gradient-gold italic">Royalty</span>,
            <br />
            Bottled by Hand.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/85">
            An exclusive maison of perfumery — rare extracts, golden craftsmanship,
            and fragrances composed for those who command a room without a word.
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-7">
            <a
              href="#collection"
              className="rounded-full bg-gold px-10 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground shadow-gold transition-transform hover:scale-105"
            >
              Explore the Collection
            </a>
            <a
              href="#bundle"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-pale"
            >
              <span className="border-b border-gold/50 pb-1">The Royal Box</span>
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
