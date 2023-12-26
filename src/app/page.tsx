import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:mx-20 ">
      <section className="text-[var(--font-light)] grid grid-cols-1 md:grid-cols-2 mt-20 gap-4 mx-4">
        <div className="w-full h-96 bg-[var(--hover)] rounded-xl p-2">
          <h1 className="text-4xl uppercase">desarrollo web</h1>
          <p>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            earum officiis, hic eaque et natus cupiditate tempora beatae
            laboriosam, consequuntur quae. Quaerat facilis blanditiis impedit
            pariatur dolor, nostrum veritatis. Temporibus.
          </p>
          <br />
          <small>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis explicabo velit incidunt deleniti cum ut atque
          </small>
          <br />
          <br />
          <button>Boton</button>
        </div>

        <div className="w-full h-96 bg-[var(--hover)] rounded-xl p-2">
          imagen
        </div>
      </section>
    </main>
  );
}
