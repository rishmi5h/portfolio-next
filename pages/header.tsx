"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeChanger from "./ThemeChanger";


export default function Header() {
  const heading = "<Rishabh Mishra />";
  const pathname = usePathname();
  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <nav className='flex items-center justify-between flex-wrap p-6 mx-16 text-xl border rounded-full mt-3'>
      <div className='flex items-center flex-shrink-0 text-white mr-3'>
        <span className='font-semibold text-xl tracking-tight'>
          <Link href={"/"} className='hover:text-blue-800'>
            {" "}
            {heading}
          </Link>
        </span>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block lg:flex lg:items-center lg:w-auto'>
        <div className='text-lg lg:flex-grow'>
          {links.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                passHref
                className='block mt-4 lg:inline-block lg:mt-0 mr-8'
              >
                <div
                  className={`font-medium hover:text-blue-700 ${
                    isActive ? "border-b-2 border-blue-600 pb-2" : "text-white"
                  }`}
                >
                  {label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row">
        <ThemeChanger />
      </div>
    </nav>
  );
}
