import { Reveal } from "@/components/site/reveal";

const steps = [
  {
    step: "01",
    title: "Sourcing",
    body: "Seeds and whole spices are picked from trusted farms and cleaned before anything else happens.",
  },
  {
    step: "02",
    title: "Cold pressing & grinding",
    body: "Wooden ghani pressing at low temperature; spices ground in small batches to protect aroma.",
  },
  {
    step: "03",
    title: "Testing",
    body: "Each batch goes through purity and adulteration checks, and gets a traceable batch number.",
  },
  {
    step: "04",
    title: "Sealed & shipped",
    body: "Packed food-grade, sealed the same day, and dispatched to homes, stores and bulk buyers.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Farm to Kitchen
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          Four steps, and you can audit every one of them.
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 100}>
            <li className="relative border-t-2 border-haldi/40 pt-6">
              <span className="font-display text-3xl text-haldi">{s.step}</span>
              <h3 className="mt-2 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}