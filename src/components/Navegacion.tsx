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
              "flex items-center justify-center gap-4 mb-2 rounded-md bg-[var(--button-dark)] p-3 text-sm font-medium hover:bg-[var(--estado)] hover:text-slate-400 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[var(--card-dark)] hover:bg-[var(--card-dark)] text-white":
                  pathname === link.href,
              }
            )}
          >
            <p className="text-white">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
