import Link from "next/link";

export default function Navegacion() {
  return (
    <>
      <Link href="/consultas">
        <h1 className="bg-slate-100 text-center rounded-lg hover:bg-[var(--hover)] cursor-pointer px-4 py-2">
          Consultas
        </h1>
      </Link>
    </>
  );
}
