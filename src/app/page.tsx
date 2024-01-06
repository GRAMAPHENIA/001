import Link from "next/link";
import Image from "next/image";

import Home from "@/components/Home";
import Web from "@/components/Web";
import Ilustraciones from "@/components/Ilustraciones";
import Tresd from "@/components/Tresd";

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
