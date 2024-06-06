"use client";

import ContentInfo from "@/components/shared/ContentInfo";
import ScrollAppear from "@/components/shared/ScrollAppear";
import ContactUsForm from "@/components/form/ContactUsForm";
import Map from "@/components/shared/Map";
import FormSection from "@/components/features/contactUs/FormSection";

export default function ContactUs() {
  return (
    <section className="mb-32 text-gray-900  ">
      <Map/>
      <ScrollAppear>
        <ContentInfo />
      </ScrollAppear>
      <FormSection/>
    </section>
  );
}
