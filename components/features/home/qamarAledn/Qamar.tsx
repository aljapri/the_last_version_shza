import Image from "next/image";
import qamar from "../../../../public/image/qamar.png";
import ScrollAppear from "../../../shared/ScrollAppear";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/shared/heroSection/HeroSection";
export default function Qamar() {
      const t = useTranslations("Qamar");

  return (
    <>
      <HeroSection
        image={qamar}
        direction="right"
        title={t("title")}
        text={t("content")}
      />
    </>
  );
}
