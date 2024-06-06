"use client";

import { contactInfo } from "@/constants";
import ScrollAppear from "../../../shared/ScrollAppear";
import ContentInfo from "@/components/shared/ContentInfo";
import Map from "@/components/shared/Map";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ContactUs() {
    const params = useParams();

    // Route -> /shop/[tag]/[item]
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    console.log(params);
  return (
    <section className="mb-32 text-green-900">
      <Map />
      <ScrollAppear>
        <ContentInfo />
      </ScrollAppear>
      <div className="w-full  flex justify-center items-center">
        <Link
          href={`/${params.locale}/${"contactUs"}`}
          className=" sm:w-40 px-4 text-center py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 text-sm"
        >
          اتصل بنا
        </Link>
      </div>
    </section>
  );
}
