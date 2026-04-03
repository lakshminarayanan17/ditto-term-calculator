import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cover = localFont({
  variable: "--font-cover",
  src: [
    { path: "../fonts/Cover-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Cover-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Cover-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Cover-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Cover-Black.ttf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Ditto — The Ultimate Insurance Buying Experience",
  description:
    "Get expert guidance on Health Insurance and Term Insurance. Schedule a free call with Ditto's insurance advisors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cover.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
