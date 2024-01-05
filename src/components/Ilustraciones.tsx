export default function Ilustraciones() {
  return (
    <>
      <section className="text-[var(--font-light)] grid grid-cols-1 md:grid-cols-2 my-5 gap-4 mx-4 mb-4">
        <div className="flex flex-col col-span-2 w-full p-4 justify-center items-center">
          <div className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] p-10">
            <p className="text-6xl text-[var(--button-dark)] opacity-80 border-8 border-[var(--gradient-end)] bg-[var(--gradient-start)] rounded-full h-80 w-80 flex justify-center items-center">
              II
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)]">
          <h1 className="font-bold">Ilustraciones</h1>
          <p className="mt-6 text-base lg:text-2xl text-center mx-auto text-[var(--font-light)]">
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
          <p className="text-base lg:text-2xl text-center mx-auto text-[var(--font-light)]">
            <br />
            Diseñamos y desarrollamos tu página web. Creamos la identidad de tu
            empresa. Te alojamos para que tu negocio crezca en el mundo digital.
            Incluimos el certificado SSL. Diseñamos para que pueda ser visto en
            todos los dispositivos.
          </p>
        </div>
      </section>
    </>
  );
}
