import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";

const ibmFont = IBM_Plex_Sans({ weight: ["400", "700"], preload: false });

export const metadata: Metadata = {
  title: "Form behaviour",
  description: "Form behaviour coding challange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmFont.className}>{children}</body>
    </html>
  );
}
