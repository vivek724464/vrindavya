"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "Our Story" },
  { href: "#purity", label: "Purity" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#order", label: "Order" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="bg-gold-gradient flex size-10 items-center justify-center rounded-full font-display text-lg text-primary-foreground">
            V
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base tracking-tight">Vrindavya</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Group of Industries
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-haldi after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="gold" size="sm">
            <a href="#order">Place an enquiry</a>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="gold" className="mt-4 w-full">
            <a href="#order" onClick={() => setOpen(false)}>
              Place an enquiry
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}