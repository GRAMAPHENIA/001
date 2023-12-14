"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Inicio", href: "/" },
  {
    name: "Consultas",
    href: "/consultas",
  },
  { name: "Contactos", href: "/contactos" },
];

export default function Navegacion() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center text-center justify-center rounded-full  py-2 px-4 text-lg font-medium hover:bg-[var(--estado)] hover:text-slate-400 md:flex-none md:justify-start md:py-2 md:px-4 border-2 border-[var(--card-dark)]",
              {
                "bg-[var(--hover)] hover:bg-[var(--hover)] text-white rounded-full border-2 border-[var(--dark)]":
                  pathname === link.href,
              }
            )}
          >
            <p className="text-center text-white shadow-slate-400">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
