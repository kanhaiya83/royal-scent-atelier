import bundle from "@/assets/product-bundle.jpg";

const includes = [
  "L'Or Souverain — 100ml Eau de Parfum",
  "Fumée Royale — Diffuser & Incense Sticks",
  "Le Secret de Poche — 10ml Pocket Perfume",
  "Numbered certificate of authenticity",
];

export function BundleSection() {
  return (
    <section id="bundle" className="relative overflow-hidden bg-card py-28">
      <div className="absolute inset-0 opacity-10 [background:var(--gradient-gold)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl border border-gold/30" />
          <img
            src={bundle}
            alt="The Royal Box — luxury perfume bundle"
            width={1400}
            height={1000}
            loading="lazy"
            className="relative rounded-2xl shadow-royal"
          />
        </div>

        <div>
          <p className="inline-block rounded-full bg-gold px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-accent-foreground shadow-gold">
            The Complete Maison
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold sm:text-6xl">
            The <span className="text-gradient-gold italic">Royal Box</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-foreground/80">
            All three treasures of the house, presented in a maroon-and-gold keepsake
            case lined with velvet. The definitive gift — and the most regal way to
            begin your journey with Parina Aura.
          </p>

          <ul className="mt-8 space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-1 text-gold">✦</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-foreground/50 line-through">
                $600
              </span>
              <span className="font-display text-4xl text-gold">$540</span>
            </div>
            <button className="rounded-full bg-gold px-9 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground shadow-gold transition-transform hover:scale-105">
              Claim the Royal Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
