"use client";

import { contactInfo } from "@/constants";
import ScrollAppear from "../../../shared/ScrollAppear";
import ContentInfo from "@/components/shared/ContentInfo";

export default function ContactUs() {
  return (
    <section className="mb-32 text-green-900">
      <div
        id="map"
        className=" h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>


      <ScrollAppear>
        <ContentInfo/>
      </ScrollAppear>
      <div className="w-full  flex justify-center items-center">
        <button className=" sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 text-sm">
          اتصل بنا
        </button>
      </div>
    </section>
  );
}
