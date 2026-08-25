import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
const marquee = [
  "100% Purity Promise",
  "Wood-Pressed Kachi Ghani",
  "No Artificial Colour",
  "Batch-Wise Lab Reports",
  "Farmer Sourced",
  "Nothing Hidden",
];

export function Hero() {
  return (
    <section id="top" className="bg-hero-gradient relative overflow-hidden pt-28 md:pt-32">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-mustard/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-haldi/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-2 md:px-8 md:pb-28">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-flex items-center gap-2 rounded-full border border-haldi/40 bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="size-3.5 text-haldi" />
            Kitchen essentials since generations
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Pure mustard oil and Indian spices,
            <span className="text-gold-gradient"> exactly as nature made them.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Vrindavya Group of Industries brings kachi ghani mustard oil and stone-ground masalas
            from Indian farms to your kitchen — 100% pure, fully traceable, and honest about every
            single thing inside the pack.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <a href="#products">
                Explore our products <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outlineSpice" size="lg">
              <a href="#order">Place an order enquiry</a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              { k: "100%", v: "Purity, no blending" },
              { k: "0", v: "Artificial colours" },
              { k: "6+", v: "Kitchen essentials" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-in fade-in zoom-in-95 relative duration-1000">
          <div className="shadow-lift overflow-hidden rounded-[2rem] border border-haldi/25">
            <img
              src="/hero-mustard-oil.jpg"
              alt="Bottle of cold-pressed Vrindavya mustard oil surrounded by brass bowls of Indian spices"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="shadow-soft absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 md:left-auto md:right-6">
            <ShieldCheck className="size-5 text-leaf" />
            <div>
              <p className="text-sm font-medium">Lab-tested every batch</p>
              <p className="text-xs text-muted-foreground">Reports shared on request</p>
            </div>
          </div>
          <div className="shadow-soft absolute -top-5 -left-5 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 md:flex">
            <Leaf className="size-5 text-leaf" />
            <p className="text-sm font-medium">Farmer sourced</p>
          </div>
        </div>
      </div>

      <div className="border-y border-haldi/25 bg-card/60 py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-haldi" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
