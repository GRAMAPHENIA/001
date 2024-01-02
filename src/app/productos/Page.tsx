import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRODUCTOS",
  description: "Seccion dedicada al",
};

const page = () => {
  return (
    <>
      <div className="flex flex-col mx-2 md:mx-20">
        <div className="flex justify-center items-center h-20 shrink-0 rounded-lg bg-[var(--dark)] p-4 md:h-52 text-2xl text-[var(--font-light)] mt-20 ">
          <Image
            className="mr-4"
            src="/iconos/logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
          CONCEPTO HEXAGONO PRODUCTOS
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid md:grid-cols-4">
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
        </div>
        <div className="flex justify-center items-center h-20 shrink-0 rounded-lg bg-[var(--dark)] p-4 md:h-52 text-2xl text-[var(--font-light)] mt-20">
          <Image
            className="mr-4"
            src="/iconos/logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
          CONCEPTO HEXAGONO
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid md:grid-cols-4">
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
        </div>
        <div className="flex justify-center items-center h-20 shrink-0 rounded-lg bg-[var(--dark)] p-4 md:h-52 text-2xl text-[var(--font-light)] mt-20">
          <Image
            className="mr-4"
            src="/iconos/logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
          CONCEPTO HEXAGONO
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid md:grid-cols-4">
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
        </div>
        <div className="flex justify-center items-center h-20 shrink-0 rounded-lg bg-[var(--dark)] p-4 md:h-52 text-2xl text-[var(--font-light)] mt-20">
          <Image
            className="mr-4"
            src="/iconos/logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
          CONCEPTO HEXAGONO
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid md:grid-cols-4">
          <div className="text-center rounded-lg text-white bg-[var(--dark)] px-4 py-2">
            caja
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
