import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export function Products({ onOrder }: { onOrder: (productName: string) => void }) {
  return (
    <section id="products" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Our Products
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Kitchen essentials, made the slow and honest way.
            </h2>
          </div>
          <Button asChild variant="outlineSpice">
            <a href="#order">Bulk &amp; distributor enquiry</a>
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <article className="group hover:shadow-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} by Vrindavya Group of Industries`}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-haldi">{p.tagline}</p>
                  <h3 className="mt-2 font-display text-xl">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.packs.map((pack) => (
                      <span
                        key={pack}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {pack}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="gold"
                    className="mt-6 w-full"
                    onClick={() => onOrder(p.name)}
                  >
                    Order this <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}