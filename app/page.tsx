import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className='flex flex-col justify-between p-6 w-2/5 ml-20 my-20'>
        <p className='text-gray-500 text-3xl'>SOFTWARE ENGINEER</p>
        <div>
          <h1 className='text-5xl py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Rishabh Mishra</h1>
        </div>
        <div className='border-l-2 pl-4 text-gray-500 mt-5'>
          <p className='w-1/2 text-lg'>
            I am a full-stack developer working from India.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
