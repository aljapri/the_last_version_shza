import ScrollAppear from '@/components/shared/ScrollAppear';
import Image from 'next/image';
import React from 'react'
import oil from '../../../../public/image/oil.jpg'
import { useTranslations } from 'next-intl';
export default function Oil() {
        const t = useTranslations("Oil");

  return (
    <section className=" dark:bg-gray-900 flex flex-row   bg-blue  py-10  ">
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <ScrollAppear>
              <Image src={oil} width={1000} height={400} alt="image" />
            </ScrollAppear>
          </div>
          <div className="w-full md:w-1/2 lg:pr-32">
            <ScrollAppear>
              <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
                {t("title")}
              </h2>
            </ScrollAppear>

            <ScrollAppear>
              <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed break-words">
                {t("content")}
              </h3>
            </ScrollAppear>

            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
