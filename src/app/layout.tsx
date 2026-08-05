import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jeżyk Buduje | Budowa, Wykończenia, Sprzedaż Domów",
  description:
    "Budowa domów, wykończenia pod klucz oraz sprzedaż gotowych nieruchomości. Domy gotowe do zamieszkania. Zaufaj doświadczeniu!",
  keywords: [
    "budowa domów",
    "wykończenia pod klucz",
    "sprzedaż domów",
    "domy na sprzedaż",
    "usługi budowlane",
  ],
  authors: [{ name: "Jeżyk Buduje" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Jeżyk Buduje | Budowa, Wykończenia, Sprzedaż Domów",
    description:
      "Budowa domów, wykończenia pod klucz oraz sprzedaż gotowych nieruchomości. Domy gotowe do zamieszkania.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-22">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
