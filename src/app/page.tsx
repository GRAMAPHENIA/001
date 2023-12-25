import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mx-2 md:mx-20 ">
      <section className="section-a rounded-lg">
        <div className="flex justify-between items-center h-20 shrink-0 rounded-lg bg-[var(--dark)] md:h-[35rem] font-bold text-[var(--font-light)] mt-20">
          <div className="bg-[var(--card-dark)] w-full h-[35rem] rounded-xl text-right overflow-hidden">
            <div className="flex justify-start bg-amber-100/20 w-[22rem] h-[22rem] rounded-br-full"></div>
          </div>

          <article className="border border-[var(--button-dark)] w-[400px] h-[35rem] rounded-l-lg text-center flex flex-col justify-center align-middle ml-2">
            <h1 className="text-[var(--button-light)] text-xl tracking-tight font-mono leading-7">
              DESARROLLO
            </h1>
            <p className="text-[var(--button-light)] text-[67px] tracking-tight font-mono leading-8">
              WEB
            </p>
          </article>
        </div>
      </section>

      <section className="grid grid-cols-4 text-white">
        <article className="col-start-1 col-end-3 bg-slate-300">articulo uno</article>
        <article className="col-start-3 col-end-4 bg-slate-700">articulo uno</article>
      </section>
    </main>
  );
}
