import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:mx-20 ">
      <section className="text-[var(--font-light)] grid grid-cols-1 md:grid-cols-2 mt-20 gap-4 mx-4">
        <div className="flex flex-col w-full  border border-[var(--estado)] rounded-xl p-4">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)]">
            desarrollo web, diseño gráfico, modelado 3D
          </h1>
          <p className="mt-6 text-2xl text-center mx-auto text-[var(--font-light)]">
            <br />
            Creamos marcas y damos alojamiento. Elaboramos la identidad que
            representa a tu empresa, diseñamos tu logo. Desarrollamos tu pagina
            web y te alojamos en nuestro servicio de hosting.
          </p>

          <small className="mt-6 text-center mx-auto text-slate-500">
            Ofrecemos creaciones digitales eficientes y creativas. Utilizamos
            tecnologías modernas y estrategias efectivas para impulsar tu
            negocio en linea.
          </small>
          <br />
          <button className="text-[var(--font-light)] mt-4 border border-[var(--estado)] rounded-full bg-[var(--card-dark)] hover:bg-[var(--button-dark)] py-2 my-10">
            Conocer
          </button>
        </div>

        <div className="w-full  border border-[var(--estado)] rounded-xl p-4">
          imagen
        </div>
      </section>
    </main>
  );
}
