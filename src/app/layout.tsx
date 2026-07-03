import type { Metadata } from "next";
import { Inter, Fraunces, Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davantealexander.com"),
  title: {
    default: "Davante Alexander | Dallas-Fort Worth Real Estate",
    template: "%s | Davante Alexander",
  },
  description:
    "Davante Alexander is a Dallas-Fort Worth real estate agent helping buyers, sellers, and investors move with confidence across DFW.",
  openGraph: {
    title: "Davante Alexander | Dallas-Fort Worth Real Estate",
    description:
      "Buying, selling, or investing in DFW? Work with an agent who knows the market cold.",
    url: "https://davantealexander.com",
    siteName: "Davante Alexander Real Estate",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
