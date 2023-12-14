import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from "@/components/Navegacion.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONCEPTO",
  description: "Generada por RedFang & BirdieOnBoard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <header className="navegacion flex bg-[var(--card-dark)] fixed z-[999] justify-end">
          <Navegacion />
        </header>
        {children}
      </body>
    </html>
  );
}
