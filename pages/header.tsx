"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <svg
          className='w-6 h-6  dark:text-white mr-5 hover:text-blue-700'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
          />
        </svg>
        <svg
          className='w-6 h-6 dark:text-white hover:text-blue-700'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 18 20'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z'
          />
        </svg>
      </div>
    </nav>
  );
}
