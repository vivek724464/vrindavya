import { FlaskConical, Handshake, PackageCheck, Sprout } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const pillars = [
  {
    icon: Sprout,
    title: "Direct from farmers",
    body: "Sarson and spices bought straight from growing belts we visit ourselves — no anonymous middle layers.",
  },
  {
    icon: FlaskConical,
    title: "Tested, not claimed",
    body: "Every batch is checked for purity, moisture and adulteration. Ask for the report and you get it.",
  },
  {
    icon: PackageCheck,
    title: "Honest packaging",
    body: "Real weight, real batch date, real ingredient list. What the label says is what the pack holds.",
  },
  {
    icon: Handshake,
    title: "Transparent pricing",
    body: "Same rate logic for a household order and a bulk order. No hidden loading, no surprise cuts.",
  },
];

export function Purity() {
  return (
    <section id="purity" className="bg-mustard-soft/70 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The Purity Promise
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Transparency isn't a tagline here. It's the whole process.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="hover:shadow-lift h-full rounded-2xl border border-haldi/25 bg-card p-6 transition-all duration-500 hover:-translate-y-1.5">
                <span className="bg-gold-gradient flex size-11 items-center justify-center rounded-xl">
                  <p.icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}