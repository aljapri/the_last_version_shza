import Navbar from '@/components/shared/navbar/Navbar';
import Image from 'next/image';
import React from 'react'
import oil from '../../public/image/oil.jpg'
import { galleryImages } from '@/constants/index';
export default function page() {
  return (
    <div className="w-full h-full bg-[#333333] pb-10">
      <div className="h-[150px] w-full"></div>
      <div className="w-full flex flex-row justify-center gap-10 px-10 flex-wrap ">
        {galleryImages.map((el:any)=>{
          return (
            <>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-[350px]"
                    src={el}
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
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
