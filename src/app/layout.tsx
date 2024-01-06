import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from "@/components/Navegacion";
import Modal from "@/components/Modal";

import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONCEPTO HEXAGONO",
  description:
    "Sitio dedicado a la creación de páginas web, generado por RedFang & BirdieOnBoard.",
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
          <div className="flex gap-2 items-center">
            <Image
              className="p-2 ml-2 justify-center align-middle"
              src="/logo-hexagono-gradient.svg"
              width={50}
              height={50}
              alt="Logo de Hexagono"
              style={{
                filter: "drop-shadow(0px 0px 4px  rgba(13, 25, 40, 1))",
              }}
            ></Image>
          </div>
          <div className="hidden md:flex">
            <Navegacion />
          </div>
          <div className="md:hidden mr-2">
            <Modal />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
