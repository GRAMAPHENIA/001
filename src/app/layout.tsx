import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from "@/components/Navegacion.tsx";

import Image from "next/image";

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
        <header className="navegacion justify-between items-center px-4 py-6">
          <div className="h-11 w-11 rounded-full border-2 border-[#213f4e]">
            <Image
              className="p-2 justify-center align-middle"
              src="/iconos/logo.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            ></Image>
          </div>
          <div className="flex">
            <Navegacion />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
