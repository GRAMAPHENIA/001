import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <figure className="flex flex-col md:mx-20">
        <section className="text-[var(--font-light)] grid grid-cols-1 md:grid-cols-2 mt-16 gap-4 mx-4">
          <div className="flex flex-col w-full rounded-xl p-4">
            <h1 className="flex flex-col justify-center align-middle font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)]">
              Desarrollo web, ilustraciones, modelado 3D
            </h1>
            <p className="mt-6 lg:text-2xl text-center mx-auto text-[var(--font-light)]">
              <br />
              Creamos marcas y elaboramos la identidad para tu empresa.
              Diseñamos logos. Desarrollamos paginas web y te alojamos en el
              servicio de hosting de tu preferencia.
            </p>

            <small className="mt-6 text-center mx-auto text-[var(--font-semi-light)]">
              Ofrecemos creaciones digitales eficientes y creativas. Utilizamos
              tecnologías modernas y estrategias efectivas para impulsar tu
              negocio en linea.
            </small>
            <br />
            <div className="flex justify-center">
              <button className="text-[var(--font-light)] mt-4 border border-[var(--estado)] rounded-full bg-[var(--card-dark)] hover:bg-[var(--button-dark)] py-2 my-10 w-[20rem]">
                Conocer Más
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center align-middle rounded-xl">
            <Image
              className="p-2 ml-2 object-scale-down"
              src="/hexagono-3d.png"
              width={500}
              height={500}
              alt="Logo de Hexagono"
            ></Image>
          </div>
        </section>
      </figure>
    </>
  );
}
