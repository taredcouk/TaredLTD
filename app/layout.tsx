import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const mRounded = M_PLUS_Rounded_1c({
  variable: "--font-mRounded",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Tared Ltd - Design and Advertising Agency | London",
  description: "Professional design and advertising agency specializing in graphic design, motion design and advertising video production for online advertising. Based in London, UK.",
  keywords: "design, advertising agency, graphic design, motion design, 2D design, 3D design, advertising video production, London, UK",
  authors: [{ name: "Tared Ltd" }],
  openGraph: {
    title: "Tared Ltd - Design and Advertising Agency",
    description: "Professional design and advertising agency specializing in graphic design, motion design and advertising video production for online advertising. Based in London, UK.",
    url: "https://www.tared.co.uk",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://tared.co.uk/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tared Open Graph Image",
      },
    ],
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalyticsScript />
      <body
        className={`${mRounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
