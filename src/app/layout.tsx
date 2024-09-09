import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";
import cn from "@/app/lib/cn";

const fontSerif = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "counsel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", fontSerif.className)}>
        {children}
      </body>
    </html>
  );
}
