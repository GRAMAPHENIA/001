"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Consultas", href: "/consultas" },
  { name: "Contactos", href: "/contactos" },
  { name: "Portafolio", href: "/portafolio" },
];

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    const handleClickOutsideModal = (event) => {
      const modal = document.getElementById("miModal");

      if (modalOpen && modal && !modal.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutsideModal);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const pathname = usePathname();

  return (
    <>
      <button onClick={openModal}>
        <Image
          className="p-2 justify-center align-middle"
          src="/iconos/menu.svg"
          width={50}
          height={50}
          alt="Icono de Hexagono con un mas dentro para destacar un modal que contiene la navegacion de la página"
        />
      </button>
      <dialog
        className="fixed w-full h-screen justify-center items-center bg-[var(--estado)] py-14 px-20 border border-[var(--card-light)]"
        id="miModal"
        open={modalOpen}
      >
        <form className="flex flex-col text-center p-4" method="dialog">
          <nav>
            <ol className="space-y-4">
              <p className="text-6xl mb-4 p-4 text-white">⌨</p>
              <li>
                {links.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <div
                      className={clsx(
                        "flex items-center text-center justify-center rounded-full py-2 px-4 text-lg font-medium md:flex-none md:justify-start md:py-2 md:px-4 cursor-pointer",
                        {
                          "text-white hover:bg-amber-100 hover:border-[var(--light)] hover:text-[var(--card-light)]":
                            pathname !== link.href,
                          "bg-amber-200 border-2 border-[var(--light)] text-[var(--hover)] rounded-full":
                            pathname === link.href,
                        }
                      )}
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      {link.name}
                    </div>
                  </Link>
                ))}
              </li>
            </ol>
          </nav>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
