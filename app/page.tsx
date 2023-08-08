import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </nav>
    </main>
  );
}
