import Link from "next/link";
import Image from "next/image";

import Home from "@/components/Home.tsx";
import Web from "@/components/Web.tsx";
import Ilustraciones from "@/components/Ilustraciones.tsx";
import Tresd from "@/components/Tresd.tsx";

export default function Page() {
  return (
    <main>
      <Home />
      <Web />
      <Ilustraciones />
      <Tresd />
    </main>
  );
}
