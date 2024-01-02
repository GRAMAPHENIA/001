import React from "react";
import Image from "next/image";
import Link from "next/link";

// import Instagram from "@/public/iconos/instagram.svg";
// import Facebook from "@/public/iconos/facebook.svg";
// import Email from "@/public/iconos/email.svg";

const Productos = () => {
  return (
    <>
      <div className="flex flex-col text-[var(--font-light)] profile">
        <ul className="flex flex-col gap-4 ">
          <Link href="/">
            <li className="flex items-center mx-0 hover:text-[var(--gradient-via)]">
              <Image
                className="mr-4 border border-slate-700 p-1 rounded-full"
                src="/iconos/facebook.svg"
                width={38}
                height={38}
                alt="Picture of the author"
              ></Image>
              Facebook
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center mx-0 hover:text-[var(--gradient-via)]">
              <Image
                className="mr-4 border border-slate-700 p-1 rounded-full"
                src="/iconos/instagram.svg"
                width={38}
                height={38}
                alt="Picture of the author"
              ></Image>
              Instagram
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center mx-0 hover:text-[var(--gradient-via)]">
              <Image
                className="mr-4 border border-slate-700 p-1 rounded-full"
                src="/iconos/email.svg"
                width={36}
                height={36}
                alt="Picture of the author"
              ></Image>
              Email
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center mx-0 hover:text-[var(--gradient-via)]">
              <Image
                className="mr-4 border border-slate-700 p-1 rounded-full"
                src="/iconos/email.svg"
                width={36}
                height={36}
                alt="Picture of the author"
              ></Image>
              Email
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Productos;
