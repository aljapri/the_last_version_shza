import Link from 'next/link';
import React from 'react'

export default function Language() {
  return (
    <div className=" flex flex-row space-x-5 w-full justify-center mt-5 ">
      <p className="cursor-pointer">
        <Link href={`/ar`} className="text-gray-300">
          العربية
        </Link>
      </p>
      <p className="cursor-pointer">
        <Link href={`/en`} className="text-gray-300">
          english
        </Link>
      </p>
    </div>
  );
}
