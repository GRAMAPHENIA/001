import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from "@/components/Navegacion.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONCEPTO",
  description: "Generada por Red & Bird",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <header className="flex bg-[#0d1117] flex-row gap-2 p-6 mt-0 fixed z-[999] w-full justify-end">
          <Navegacion />
        </header>
        {children}
      </body>
    </html>
  );
}
