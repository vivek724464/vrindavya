import type { Metadata } from "next";
import "./globals.css";
import {Navbar} from "@/components/site/navbar";
import {Footer} from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Vrindavya Group of Industries | Pure Mustard Oil & Indian Spices",
  description: "100% pure kachi ghani mustard oil and stone-ground Indian spices from Vrindavya Group of Industries. Farmer sourced, lab tested, fully transparent. Order directly — no account needed.",
  openGraph: {
    title: "Vrindavya Group of Industries | Pure Mustard Oil & Indian Spices",
    description: "100% pure kachi ghani mustard oil and stone-ground Indian spices from Vrindavya Group of Industries.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}