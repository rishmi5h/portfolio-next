import Link from "next/link";

export default function Header() {
  return (
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
        </ul>
      </nav>
  );
}
