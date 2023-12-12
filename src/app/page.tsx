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
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg text-white bg-[var(--card-dark)] px-6 py-10 md:w-2/5 md:px-20">
         Change
        </div>
      </div>
    </main>
  );
}
