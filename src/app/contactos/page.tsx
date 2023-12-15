import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACTOS",
  description: "Seccion dedicada al",
};

const page = () => {
  return (
    <div>
      <h1 className="text-white">Contactos</h1>
    </div>
  );
};

export default page;
