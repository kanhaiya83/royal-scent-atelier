import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-28 text-center">
      <div className="rounded-3xl border border-gold/30 bg-card p-12 shadow-royal">
        <p className="text-xs uppercase tracking-royal text-gold">The Inner Court</p>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          Join the <span className="text-gradient-gold italic">Maison</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Be the first to receive limited editions, private launches and a welcome
          gift with your first order.
        </p>

        {sent ? (
          <p className="mt-8 font-display text-2xl text-gold">Welcome to the court. ✦</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-gold/40 bg-royal px-6 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-[0.25em] text-accent-foreground shadow-gold transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
