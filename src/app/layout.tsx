import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from "@/components/Navegacion.tsx";

import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONCEPTO HEXAGONO",
  description: "Sitio dedicado a la creación de páginas web, generado por RedFang & BirdieOnBoard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <header className="navegacion justify-between items-center">
          <div className="ml-2 h-11 w-11 rounded-full border-2 border-[#213f4e]">
            <Image
              className="p-2 justify-center align-middle"
              src="/iconos/logo.svg"
              width={50}
              height={50}
              alt="Logo de Hexagono"
            ></Image>
          </div>
          <div className="hidden md:flex">
            <Navegacion />
          </div>
          <div className="md:hidden">
            <h1 className="text-white">
              <Image
                className="p-2 justify-center align-middle"
                src="/iconos/hexagono.svg"
                width={50}
                height={50}
                alt="Logo de Hexagono"
              ></Image>
            </h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
