"use client";
import AboutUs from "@/components/features/home/aboutUs/AboutUs";
import ContactUs from "@/components/features/home/contactUs/ContactUs";
import Header from "@/components/features/home/header/Header";
import GetDown from "@/components/shared/GetDown";
import Navbar from "@/components/shared/navbar/Navbar";
import Gallery from "@/components/shared/swiper/Gallery";
import Image from "next/image";
import main_image from "../public/image/main-image.jpg";

export default function Home() {
  return (
    <div>
      <main className="w-full min-h-screen relative ">
        <Image src={main_image} quality="100" layout="fill" alt="main Image " />
        <Navbar />
        <Header />
        <GetDown />
      </main>
      <AboutUs />
      {/* <Products/> */}
      <Gallery />
      <ContactUs />
    </div>
  );
}
