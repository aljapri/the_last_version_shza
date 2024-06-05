"use client";

import ContentInfo from "@/components/shared/ContentInfo";
import ScrollAppear from "@/components/shared/ScrollAppear";
import ContactUsForm from "@/components/form/ContactUsForm";

export default function ContactUs() {
  return (
    <section className="mb-32 text-gray-900  ">
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
        <ContentInfo />
      </ScrollAppear>
      <div className="w-full  flex justify-center items-center">
        <section className="bg-gray-900">
          <div className="py-8 lg:py-16 px-4 max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-300  sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <ContactUsForm/>
          </div>
        </section>
      </div>
    </section>
  );
}
