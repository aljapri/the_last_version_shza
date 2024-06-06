import ScrollAppear from "@/components/shared/ScrollAppear";
import Image from "next/image";
import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";
export default function HeroSection({ image, direction, text, title }: any) {
  return (
    <section className=" bg-gray-900 flex flex-row  py-10  ">
      {direction == "left" ? (
        <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
          <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <ScrollAppear>
                <HeroImage image={image} />
              </ScrollAppear>
            </div>
            <div className="w-full md:w-1/2 lg:pr-32">
              <ScrollAppear>
                <HeroTitle title={title} />
              </ScrollAppear>

              <ScrollAppear>
                <HeroText text={text} />
              </ScrollAppear>

              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
          <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
            <div className="w-full md:w-1/2 lg:pr-32">
              <ScrollAppear>
                <HeroTitle title={title} />
              </ScrollAppear>

              <ScrollAppear>
                <HeroText text={text} />
              </ScrollAppear>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <ScrollAppear>
                <HeroImage image={image} />
              </ScrollAppear>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
