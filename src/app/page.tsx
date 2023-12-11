import Image from "next/image";

import Navegacion from "@/components/Navegacion.tsx";
import Header from "@/components/Header.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="contenedor-principal">
        <div>
          <Header />
          <Navegacion />
        </div>
      </section>
    </main>
  );
}
