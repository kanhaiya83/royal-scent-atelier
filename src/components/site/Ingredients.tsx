import texture from "@/assets/texture.jpg";

const ingredients = [
  { name: "Royal Oud", note: "Aged agarwood from the East — smoky, resinous, regal." },
  { name: "Damask Rose", note: "Distilled at dawn for its deepest, most velvety bloom." },
  { name: "Saffron", note: "The world's most precious spice, leather-warm and rare." },
  { name: "Amber & Myrrh", note: "A golden base that lingers like a memory of grandeur." },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="relative overflow-hidden py-28">
      <img
        src={texture}
        alt=""
        aria-hidden
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-royal/85" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-royal text-gold">The Ingredients</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Composed from the <span className="text-gradient-gold italic">Rarest</span> Essences
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className="group rounded-2xl border border-gold/25 bg-card/80 p-8 backdrop-blur transition-colors hover:border-gold/60"
            >
              <span className="font-display text-5xl text-gold/40">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl text-foreground">{ing.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{ing.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
