"use client";

import { useState } from "react";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Purity } from "@/components/site/purity";
import { Products } from "@/components/site/products";
import { Process } from "@/components/site/process";
import { OrderForm } from "@/components/site/order-form";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      {/* Navbar is automatically injected here by layout.tsx */}
      <Hero />
      <About />
      <Purity />
      <Products onOrder={handleOrder} />
      <Process />
      <OrderForm selectedProduct={selectedProduct} />
      {/* Footer is automatically injected here by layout.tsx */}
    </div>
  );
}