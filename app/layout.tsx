import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "./fonts/source-serif.woff2", style: "normal" },
    { path: "./fonts/source-serif-italic.woff2", style: "italic" },
  ],
  weight: "200 900",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LCM Catering | Corporate catering in Johannesburg",
  description:
    "Conferences, boardroom lunches, awards evenings and daily meal deliveries. Corporate catering in Johannesburg since 2009.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${archivo.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
