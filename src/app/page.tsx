import Link from "next/link";
import Image from "next/image";

import Navegacion from "@/components/Navegacion.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 mt-0">
      <Navegacion />
      <div className="flex justify-center items-center h-20 shrink-0 rounded-lg bg-[var(--card-dark)] p-4 md:h-52 text-2xl text-[var(--light)]">
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
        <div className="text-center rounded-lg text-white bg-[var(--card-dark)] px-4 py-2">
         caja
        </div>
        
      </div>
    </main>
  );
}
