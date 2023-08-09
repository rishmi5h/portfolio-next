import Link from "next/link";

export default function Projects() {
  return (
    <div>
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
      <h1>This is product page</h1>
    </div>
  );
}
