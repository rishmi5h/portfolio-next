import Link from "next/link";

export const metadata = {
  title: "rishmi5h | blogs",
  openGraph: {
    title: "Blog",
  },
};

export default function Blog() {
  return (
    <div className='flex flex-col items-center justify-between p-24'>
      <h1>This is blog page</h1>
    </div>
  );
}
