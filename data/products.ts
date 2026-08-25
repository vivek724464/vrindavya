export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  packs: string[];
  image: string;
  category: "Oil" | "Spice";
};

export const products: Product[] = [
  {
    id: "kachi-ghani-mustard-oil",
    name: "Kachi Ghani Mustard Oil",
    tagline: "Wood-pressed, unrefined",
    description:
      "Cold-pressed at low temperature from hand-picked sarson so the pungency, aroma and natural nutrients stay intact. Nothing blended, nothing bleached.",
    packs: ["500 ml", "1 L", "5 L", "15 L tin"],
    image: "/product-mustard-oil.jpg",
    category: "Oil",
  },
  {
    id: "haldi-turmeric",
    name: "Haldi — Turmeric Powder",
    tagline: "Lab-tested curcumin",
    description:
      "Single-origin turmeric fingers, sun-dried and stone-ground. Deep colour that comes from the root, never from added dye.",
    packs: ["100 g", "200 g", "500 g", "1 kg"],
    image: "/product-turmeric.jpg",
    category: "Spice",
  },
  {
    id: "lal-mirch",
    name: "Lal Mirch — Red Chilli Powder",
    tagline: "No artificial colour",
    description:
      "Stem-free dried chillies ground fine for even heat, with the natural red you would get in your own kitchen.",
    packs: ["100 g", "200 g", "500 g", "1 kg"],
    image: "/product-chilli.jpg",
    category: "Spice",
  },
  {
    id: "dhaniya",
    name: "Dhaniya — Coriander Powder",
    tagline: "Whole seed ground fresh",
    description:
      "Cleaned coriander seeds ground in small batches so the citrusy aroma reaches your kitchen and not the warehouse.",
    packs: ["200 g", "500 g", "1 kg"],
    image: "/product-coriander.jpg",
    category: "Spice",
  },
  {
    id: "garam-masala",
    name: "Vrindavya Garam Masala",
    tagline: "House blend, 13 spices",
    description:
      "Roasted and blended to a family recipe — cinnamon, clove, black cardamom, bay leaf and more. Zero fillers, zero starch.",
    packs: ["50 g", "100 g", "200 g"],
    image: "/product-garam-masala.jpg",
    category: "Spice",
  },
  {
    id: "jeera",
    name: "Jeera — Cumin Seeds",
    tagline: "99% purity, sortex clean",
    description:
      "Machine-sorted whole cumin with a full, earthy aroma. Cleaned three times before it is packed and sealed.",
    packs: ["100 g", "250 g", "500 g", "1 kg"],
    image: "/product-cumin.jpg",
    category: "Spice",
  },
];