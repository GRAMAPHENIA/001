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
        className="rounded-3xl fixed top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 mt-6"
        id="miModal"
        open={modalOpen}
      >
        <form className="flex flex-col text-center p-4" method="dialog">
          
          <nav>
            <ol>
              <li>
                <Link href="/" onClick={closeModal}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/contactos" onClick={closeModal}>
                  Contactos
                </Link>
              </li>
              <li>
                <Link href="/consultas" onClick={closeModal}>
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
