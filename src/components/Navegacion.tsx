"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

import Productos from "../components/Productos.tsx";

const links = [
  { name: "Inicio", href: "/" },
  {
    name: "Servicios",
    href: "/servicios",
  },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Productos", href: "/productos" },
];

export default function Navegacion() {
  const pathname = usePathname();
  const [abrirProductos, setAbrirProductos] = useState(false);

  return (
    <>
      <section className="flex items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            passHref
            className={clsx(
              "flex items-center text-center justify-center rounded-full py-2 px-4 text-lg font-medium hover:bg-[var(--button-dark)] hover:text-slate-400 md:flex-none md:justify-start md:py-2 md:px-4 mx-1",
              {
                "bg-[var(--card-dark)] hover:bg-[var(--card-dark)] text-[var(--font-light)]":
                  pathname === link.href,
              }
            )}
          >
            <span className="text-center text-[var(--font-light)]">
              {link.name}
            </span>
          </Link>
        ))}
        <div className="relative">
          <button
            className="bg-white px-4 py-2 rounded-full mx-2"
            onClick={() => setAbrirProductos((prev) => !prev)}
          >
            Contactos
          </button>
          {abrirProductos && <Productos />}
        </div>
      </section>
    </>
  );
}
