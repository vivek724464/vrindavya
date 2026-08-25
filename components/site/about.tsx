import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our Story</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            A family trade, built on one promise — never dilute what reaches the kitchen.
          </h2>
        </Reveal>

        <Reveal delay={120} className="space-y-5 text-muted-foreground md:text-lg">
          <p>
            Vrindavya Group of Industries began with a simple frustration: the mustard oil and
            masalas on the shelf rarely smelled like the ones at home. Somewhere between the field
            and the bottle, purity was being traded for margin.
          </p>
          <p>
            So we built the chain ourselves — sourcing directly from farmers, pressing in small
            wooden ghanis, grinding spices in short batches, and packing under our own roof. No
            blending agents, no colour, no filler, no shortcuts.
          </p>
          <p className="border-l-2 border-haldi pl-5 font-display text-xl text-foreground">
            “If we can't tell you exactly what is inside, we don't sell it.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
