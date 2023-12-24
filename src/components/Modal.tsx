"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      const modal = document.getElementById("miModal");
      modal.showModal();
    }
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>
        <Image
          className="p-2 justify-center align-middle"
          src="/iconos/hexagono.svg"
          width={50}
          height={50}
          alt="Icono de Hexagono con un mas dentro para destacar un modal que contiene la navegacion de la ágina"
        ></Image>
      </button>
      <dialog id="miModal">
        <form className="flex flex-col" method="dialog">
          <h1>Navegacion</h1>
          <Link href="/" onClick={closeModal}>Inicio</Link>
          <button onClick={closeModal}>Cerrar</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
