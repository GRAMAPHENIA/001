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
              "flex items-center text-center justify-center mb-2 rounded-full px-4 py-2 text-sm font-medium hover:bg-[var(--estado)] hover:text-slate-400 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[var(--hover)] hover:bg-[var(--hover)] text-white rounded-full":
                  pathname === link.href,
              }
            )}
          >
            <p className="text-center text-white">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
