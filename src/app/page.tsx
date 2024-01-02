import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:mx-20 ">
      <section className="text-[var(--font-light)] grid grid-cols-1 md:grid-cols-2 mt-20 gap-4 mx-4">
        <div className="flex flex-col w-full rounded-xl p-4">
          <h1 className=" flex flex-col justify-center align-middle font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)]">
            Desarrollo web, diseño gráfico, modelado 3D
          </h1>
          <p className="mt-6 text-2xl text-center mx-auto text-[var(--font-light)]">
            <br />
            Creamos marcas y elaboramos la identidad para tu
            empresa. Diseñamos logos. Desarrollamos paginas web y te alojamos
            en el servicio de hosting de tu preferencia.
          </p>

          <small className="mt-6 text-center mx-auto text-slate-500">
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

      <section className="text-[var(--font-light)] grid grid-cols-1 md:grid-cols-2 my-20 gap-4 mx-4 mb-4">
        <div className="flex flex-col col-span-2 w-full p-4 justify-center items-center">
          <div className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] p-10">
            <p className="text-6xl text-[var(--button-dark)] opacity-80 border-8 border-[var(--gradient-end)] bg-[var(--gradient-start)] rounded-full h-80 w-80 flex justify-center items-center">
              WEB
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)]">
          <h1 className="font-bold">
            ¿Por que es importante tener un sitio web?
          </h1>
          <p className="mt-6 text-2xl text-center mx-auto text-[var(--font-light)]">
            <br />
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles hasta
            computadoras de escritorio, cada pantalla es una oportunidad de
            conexión. Asegurar la visibilidad de tu empresa en este universo
            virtual es fundamental para alcanzar a tu audiencia en cualquier
            momento y lugar.
          </p>
        </div>
        <div className=" col-span-2 md:col-span-1 flex justify-center align-middle border border-[var(--estado)] rounded-xl">
          <p className="text-2xl text-center mx-auto text-[var(--font-light)]">
            <br />
            Diseñamos y desarrollamos tu página web. Creamos la identidad de tu
            empresa. Te alojamos para que tu negocio crezca en el mundo digital.
            Incluimos el certificado SSL. Diseñamos para que pueda ser visto en
            todos los dispositivos.
          </p>
        </div>
      </section>
    </main>
  );
}
