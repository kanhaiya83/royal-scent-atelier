import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "The Bundle", href: "#bundle" },
  { label: "Heritage", href: "#heritage" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-royal/95 backdrop-blur shadow-royal py-2" : "bg-transparent py-4"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl font-semibold tracking-wide text-gold-pale">
            Parina Aura
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#collection"
          className="hidden rounded-full border border-gold px-6 py-2 text-xs uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-accent-foreground md:inline-block"
        >
          Shop
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-gold md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-gold" />
            <span className="block h-0.5 w-6 bg-gold" />
            <span className="block h-0.5 w-6 bg-gold" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="mt-3 space-y-2 border-t border-gold/30 bg-royal px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
