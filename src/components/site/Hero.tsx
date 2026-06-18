import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-royal"
    >
      {/* soft ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[40rem] w-[40rem] rounded-full bg-[color-mix(in_srgb,var(--brand-green-soft)_60%,transparent)] blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[40rem] w-[40rem] rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,transparent)] blur-[150px]" />

      {/* giant monogram watermark */}
      <div className="pointer-events-none absolute -bottom-32 -left-10 select-none font-display text-[42rem] leading-none text-[color-mix(in_srgb,var(--brand-cream)_3%,transparent)]">
        M
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-12 lg:gap-20">
        {/* Content */}
        <div className="lg:col-span-6">
          <p className="mb-7 flex items-center gap-4 text-xs uppercase tracking-royal text-gold">
            <span className="h-px w-12 bg-gold" /> Maison Royale · Est. 1924
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.08] text-foreground sm:text-7xl">
            The Scent of
            <br />
            <span className="text-gradient-gold italic">Royalty</span>,
            <br />
            Bottled by Hand.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/80">
            An exclusive maison of perfumery — rare extracts, golden
            craftsmanship, and fragrances composed for those who command a room
            without a word.
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

        {/* Framed image */}
        <div className="lg:col-span-6">
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-md lg:ml-auto">
            {/* layered gold frames */}
            <div className="absolute -inset-5 translate-x-2 translate-y-2 border border-gold/20 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />
            <div className="absolute -inset-5 -translate-x-2 -translate-y-2 border border-gold/40 transition-transform duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4" />

            <div className="relative h-full w-full overflow-hidden border border-gold/30 shadow-royal">
              <img
                src={hero}
                alt="Luxury perfume bottle on velvet"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--brand-ink)_70%,transparent)] via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[color-mix(in_srgb,var(--brand-cream)_10%,transparent)]" />
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-8 -right-6 hidden border border-gold/40 bg-card px-7 py-5 text-center shadow-royal md:block">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Limited Edition
              </p>
              <p className="mt-1 font-display text-xl italic text-foreground">
                N° 01 Signature
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
