export default function Header() {
  return (
    <>
      <h1>Header</h1>
    </>
  );
}

// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export function Header() {
//   const pathname = usePathname();

//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link
//               className={`link ${pathname === "/" ? "active" : ""}`}
//               href="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={`link ${pathname === "/Consultas" ? "active" : ""}`}
//               href="/Consultas"
//             >
//               Header
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }
