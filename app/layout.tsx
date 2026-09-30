import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "flare2sky — démo Shadcn",
  description: "Projet expérimental vinext + Tailwind v4 + Shadcn/UI",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
