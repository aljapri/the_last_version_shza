import React from 'react'
import { galleryImages } from "@/constants/index";
import Image from 'next/image';

export default function Products({image}:any) {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      key={image}
    >
      <a href="#">
        <Image
          className="rounded-t-lg w-full h-[350px]"
          src={image}
          alt="image"
          width={200}
          height={200}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
