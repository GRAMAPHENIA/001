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
        <ul className="flex flex-col gap-4">
          <Link href="/">
            <li className="flex items-center mx-0">
              <Image
                className="mr-4"
                src="/iconos/facebook.svg"
                width={30}
                height={30}
                alt="Picture of the author"
              ></Image>
              Facebook
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center mx-0">
              <Image
                className="mr-4"
                src="/iconos/instagram.svg"
                width={30}
                height={30}
                alt="Picture of the author"
              ></Image>
              Instagram
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center mx-0">
              <Image
                className="mr-4"
                src="/iconos/email.svg"
                width={28}
                height={28}
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
