"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>
          Rishabh Mishra
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
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        {/* <div className='text-sm lg:flex-grow'>
          <Link
            href='/'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white active:font-bold mr-4'
          >
            Home
          </Link>
          <Link
            href='/projects'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white active:font-bold mr-4'
          >
            Projects
          </Link>
          <Link
            href='/blogs'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white active:font-bold'
          >
            Blogs
          </Link>
        </div> */}
        <div className='text-sm lg:flex-grow'>
          {links.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link key={path} href={path} passHref className='block mt-4 lg:inline-block lg:mt-0 mr-4'>
                <div
                  className={`text-sm font-medium hover:text-white ${
                    isActive ? "border-b-2 border-blue-600" : "text-gray-700"
                  }`}
                >
                  {label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
