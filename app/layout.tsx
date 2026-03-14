import type { Metadata } from "next";
import { Manrope, Marcellus } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
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
        className={`${manrope.variable} ${marcellus.variable} antialiased font-sans`}
      >
        {children}

      </body>
    </html>
  );
}

