"use client";

// Importa los módulos necesarios
import React, { useState, useEffect, MouseEvent, KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const Modal = () => {
  // Estado para controlar la apertura/cierre del modal
  const [modalOpen, setModalOpen] = useState(false);

  // Efecto para agregar event listeners
  useEffect(() => {
    // Función para manejar la tecla Escape y cerrar el modal
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    // Función para manejar el clic fuera del modal y cerrarlo
    const handleClickOutsideModal = (event: MouseEvent) => {
      const modal = document.getElementById("miModal");

      if (modalOpen && modal && !modal.contains(event.target as Node)) {
        closeModal();
      }
    };

    // Agrega event listeners al montar el componente
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutsideModal);

    // Remueve event listeners al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, [modalOpen]);

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button onClick={openModal}>
        <Image
          className="p-2 justify-center align-middle"
          src="/iconos/hexagono.svg"
          width={50}
          height={50}
          alt="Icono de Hexagono con un más dentro para destacar un modal que contiene la navegación de la página"
        />
      </button>

      {/* Modal */}
      <dialog
        className="fixed w-full h-screen justify-center items-center bg-[var(--estado)] py-14 px-20 border border-[var(--card-light)]"
        id="miModal"
        open={modalOpen}
      >
        {/* Contenido del modal */}
        <form className="flex flex-col text-center p-4" method="dialog">
          <nav>
            <ol className="space-y-4">
              {/* Icono de teclado */}
              <p className="text-6xl mb-4 p-4 text-white">⌨</p>

              {/* Enlaces del modal */}
              <li>
                <Link
                  className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]"
                  href="/"
                  onClick={closeModal}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]"
                  href="/portafolio"
                  onClick={closeModal}
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]"
                  href="/contactos"
                  onClick={closeModal}
                >
                  Contactos
                </Link>
              </li>
              <li>
                <Link
                  className="bg-amber-200 hover:bg-amber-100 cursor-pointer font-semibold py-2 px-4 rounded-full text-[var(--card-light)]"
                  href="/consultas"
                  onClick={closeModal}
                >
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
