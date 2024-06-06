import Image from "next/image";
import breakFast from "../../../../public/image/breakfast.jpg";
import ScrollAppear from "../../../shared/ScrollAppear";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/shared/heroSection/HeroSection";
export default function AboutUs() {
      const t = useTranslations("AboutUs");

  return (
    <>
      <HeroSection
        image={breakFast}
        direction="right"
        title={t("title")}
        text={t("content")}
      />
    </>
  );
}
