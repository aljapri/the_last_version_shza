"use client"
import Image from "next/image";
import "./aboutus.css";
import { useTranslations } from "next-intl";
import AboutUsImage from "@/components/features/aboutUs/AboutUsImage";
import AboutUstitle from "@/components/features/aboutUs/AboutUstitle";
export default function Page() {
    const t = useTranslations("AboutUspage");
  return (
    <div>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <AboutUstitle/>
          </div>
          <div className="responsive-container-block rightSide">
            <AboutUsImage/>
          </div>
        </div>
      </div>
    </div>
  );
}
