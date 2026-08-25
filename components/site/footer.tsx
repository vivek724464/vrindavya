"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-gold-gradient flex size-10 items-center justify-center rounded-full font-display text-lg text-primary-foreground">
              V
            </span>
            <span className="font-display text-lg">Vrindavya Group of Industries</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Kachi ghani mustard oil and Indian spices, made with 100% purity and complete
            transparency — from the farm to your kitchen.
          </p>
        </div>

        <nav className="text-sm">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Explore</p>
          <ul className="mt-4 space-y-2">
            {[
              { href: "#about", label: "Our Story" },
              { href: "#purity", label: "Purity Promise" },
              { href: "#products", label: "Products" },
              { href: "#order", label: "Place an order" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Reach us</p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 text-haldi" /> +91 98765 43210
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 text-haldi" /> orders@vrindavyagroup.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-haldi" /> Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vrindavya Group of Industries. All rights reserved.
      </div>
    </footer>
  );
}