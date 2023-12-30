import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navegacion from "@/components/Navegacion.tsx";
import Modal from "@/components/Modal.tsx";

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
          <div className="">
            <Image
              className="p-2 ml-2 justify-center align-middle"
              src="/iconos/logo-concepto.svg"
              width={80}
              height={80}
              alt="Logo de Hexagono"
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
