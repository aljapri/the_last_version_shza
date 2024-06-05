import { contactInfo } from '@/constants';
import React from 'react'

export default function ContentInfo() {
  return (
    <>
      <div className=" px-6 md:px-12 z-0">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300 justify-center">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                {contactInfo.map((el) => {
                  return (
                    <div
                      className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                      key={el.title}
                    >
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <el.icon size={30} />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold ">{el.title}</p>
                          <p className="text-sm text-neutral-500">
                            {el.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
