import { useEffect, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/products";

const EMAIL = "orders@vrindavyagroup.com";

export function OrderForm({ selectedProduct }: { selectedProduct: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [product, setProduct] = useState(products[0]?.name);
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (selectedProduct) setProduct(selectedProduct);
  }, [selectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !quantity.trim()) {
      toast.error("Please fill in your name, contact and quantity.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Product: ${product}`,
      `Quantity: ${quantity}`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Order enquiry — ${product}`,
    )}&body=${encodeURIComponent(body)}`;

    setDone(true);
    toast.success("Enquiry ready — we'll confirm your order shortly.");
  };

  return (
    <section id="order" className="bg-hero-gradient py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Place an order</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Tell us what you need. No account, no login — just a message.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Share your name, a phone number or email, the product and the quantity. Our team gets
            back with availability, pricing and delivery timelines — usually within one working day.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Household, retail and bulk quantities welcome",
              "Distributor and HoReCa enquiries handled personally",
              "Batch lab reports shared before dispatch",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="shadow-soft space-y-5 rounded-2xl border border-haldi/25 bg-card p-6 md:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ramesh Sharma"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Phone or email</Label>
              <Input
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+91 98765 43210 or you@email.com"
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <select
                  id="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Mixed / multiple items">Mixed / multiple items</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 5 L x 4 tins"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Anything else? (optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Delivery city, preferred pack size, timeline…"
                rows={3}
              />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              Send order enquiry <Send className="size-4" />
            </Button>

            {done && (
              <p className="text-center text-xs text-muted-foreground">
                Mail window didn't open? Write to{" "}
                <a href={`mailto:${EMAIL}`} className="underline">
                  {EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
