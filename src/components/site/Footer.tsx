import logo from "@/assets/logo.png";

const cols = [
  { title: "Collection", links: ["L'Or Souverain", "Fumée Royale", "Le Secret de Poche", "The Royal Box"] },
  { title: "Maison", links: ["Heritage", "Craftsmanship", "Ingredients", "Press"] },
  { title: "Care", links: ["Shipping", "Returns", "Contact", "FAQ"] },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/30 bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-gold-pale">Parina Aura</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/65">
            Exclusive perfumes and home fragrance, hand-crafted in maroon and gold
            for those who reign.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-lg text-gold">{c.title}</h4>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-foreground/65 transition-colors hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gold/20 py-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-foreground/45">
          © {new Date().getFullYear()} Parina Aura · Crafted with devotion
        </p>
      </div>
    </footer>
  );
}
