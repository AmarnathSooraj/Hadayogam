import type { Metadata } from "next";
import { Manrope, Baskervville } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hada Yogam | Find Your Inner Peace",
  description: "A sanctuary for yoga, meditation, and holistic wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${baskervville.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

