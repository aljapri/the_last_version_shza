"use client";
import AboutUs from "@/components/features/home/aboutUs/AboutUs";
import Cheese from "@/components/features/home/cheese/Cheese";
import ContactUs from "@/components/features/home/contactUs/ContactUs";
import Header from "@/components/features/home/header/Header";
import Oil from "@/components/features/home/oil/Oil";
import Qamar from "@/components/features/home/qamarAledn/Qamar";
import Wraq from "@/components/features/home/waraq/Wraq";
import GetDown from "@/components/shared/GetDown";
import Navbar from "@/components/shared/navbar/Navbar";
import main_image from "@/public/image/main-image.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Woraq");

  return (
    <div>
      <main className="w-full min-h-screen relative ">
        <Image src={main_image} quality="100" layout="fill" alt="main Image " className="-z-10" />
        <Navbar />
        <Header />
        <GetDown />
      </main>
      <AboutUs />
      <Wraq/>
      <Qamar />
      <Oil />
      <Cheese />
      <ContactUs />
    </div>
  );
}
