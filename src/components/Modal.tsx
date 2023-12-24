"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <>
      <button onClick={openModal}>
        <Image
          className="p-2 justify-center align-middle"
          src="/iconos/hexagono.svg"
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
              <li >
                <Link className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]" href="/" onClick={closeModal}>
                  Inicio
                </Link>
              </li>
              <li >
                <Link className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]" href="/portafolio" onClick={closeModal}>
                  Portafolio
                </Link>
              </li>
              <li >
                <Link className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]" href="/contactos" onClick={closeModal}>
                  Contactos
                </Link>
              </li>
              <li >
                <Link className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]" href="/consultas" onClick={closeModal}>
                  Consultas
                </Link>
              </li>
            </ol>
          </nav>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
