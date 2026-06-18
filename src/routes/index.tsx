import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Products } from "@/components/site/Products";
import { BundleSection } from "@/components/site/BundleSection";
import { Heritage } from "@/components/site/Heritage";
import { Ingredients } from "@/components/site/Ingredients";
import { Craftsmanship } from "@/components/site/Craftsmanship";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Royale — Luxury Perfumes, Diffusers & Pocket Fragrance" },
      {
        name: "description",
        content:
          "Maison Royale crafts exclusive perfumes, a diffuser with incense sticks, and a pocket perfume — plus The Royal Box bundle. Royal scents in maroon and gold.",
      },
      { property: "og:title", content: "Maison Royale — Luxury Perfumes & Home Fragrance" },
      {
        property: "og:description",
        content: "Exclusive hand-poured perfumes, diffusers and pocket fragrances, crafted for royalty.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <BundleSection />
      <Heritage />
      <Ingredients />
      <Craftsmanship />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
