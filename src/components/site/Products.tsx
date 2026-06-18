import perfume from "@/assets/product-perfume.jpg";
import diffuser from "@/assets/product-diffuser.jpg";
import pocket from "@/assets/product-pocket.jpg";

const products = [
  {
    name: "L'Or Souverain",
    type: "Eau de Parfum · 100ml",
    desc: "Our signature extrait — saffron, oud and amber laid over a heart of Damask rose. A crown in liquid form.",
    price: "$320",
    img: perfume,
    notes: ["Saffron", "Oud", "Damask Rose", "Amber"],
  },
  {
    name: "Fumée Royale",
    type: "Diffuser + Incense Sticks",
    desc: "A reed diffuser paired with hand-rolled incense sticks. Fills the palace of your home with smoky cedar and myrrh.",
    price: "$185",
    img: diffuser,
    notes: ["Cedar", "Myrrh", "Frankincense"],
  },
  {
    name: "Le Secret de Poche",
    type: "Pocket Perfume · 10ml",
    desc: "The maison reimagined in miniature. A pocket vial of the house accord to carry your reign wherever you go.",
    price: "$95",
    img: pocket,
    notes: ["Bergamot", "Jasmine", "Vanilla"],
  },
];

export function Products() {
  return (
    <section id="collection" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 text-center">
        <p className="text-xs uppercase tracking-royal text-gold">The Maison Collection</p>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-6xl">
          Three <span className="text-gradient-gold italic">Exclusive</span> Treasures
        </h2>
        <div className="gold-rule mx-auto mt-8 w-40" />
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/25 bg-card shadow-royal transition-all duration-500 hover:-translate-y-2 hover:border-gold/60"
          >
            <div className="relative overflow-hidden">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-gold px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-accent-foreground shadow-gold">
                Exclusive Item
              </span>
              <img
                src={p.img}
                alt={p.name}
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold">{p.type}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-foreground">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.notes.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-gold/30 px-3 py-1 text-[11px] tracking-wide text-gold-pale/80"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex items-center justify-between">
                <span className="font-display text-2xl text-gold">{p.price}</span>
                <button className="rounded-full border border-gold px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-accent-foreground">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
