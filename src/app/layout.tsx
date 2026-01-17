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
  title: "Jeżyk Remonty | Budowa, Remonty, Sprzedaż Domów",
  description:
    "Profesjonalne usługi budowlane i remontowe. Budowa domów, remonty generalne, wykończenia wnętrz oraz sprzedaż gotowych nieruchomości. Zaufaj doświadczeniu!",
  keywords: [
    "remonty",
    "budowa domów",
    "wykończenia wnętrz",
    "sprzedaż domów",
    "usługi budowlane",
    "Warszawa",
  ],
  authors: [{ name: "Jeżyk Remonty" }],
  openGraph: {
    title: "Jeżyk Remonty | Budowa, Remonty, Sprzedaż Domów",
    description:
      "Profesjonalne usługi budowlane i remontowe. Budowa domów, remonty generalne, wykończenia wnętrz.",
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
        <main className="pt-20">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
