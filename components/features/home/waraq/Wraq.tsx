import ScrollAppear from '@/components/shared/ScrollAppear';
import Image from 'next/image';
import React from 'react'
import woraq from '../../../../public/image/woraq.jpg'
import { useTranslations } from 'next-intl';
import HeroSection from '@/components/shared/heroSection/HeroSection';
export default function Wraq() {
    const t = useTranslations("Woraq");

  return (
    <>
      <HeroSection
        image={woraq}
        direction="left"
        title={t("title")}
        text={t("content")}
      />
    </>
  );
}
