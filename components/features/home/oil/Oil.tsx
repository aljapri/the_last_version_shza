import ScrollAppear from '@/components/shared/ScrollAppear';
import Image from 'next/image';
import React from 'react'
import oil from '../../../../public/image/oil.jpg'
import { useTranslations } from 'next-intl';
import HeroSection from '@/components/shared/heroSection/HeroSection';
export default function Oil() {
        const t = useTranslations("Oil");

  return (
    <>
        <HeroSection
          image={oil}
          direction="left"
          title={t("title")}
          text={t("content")}
        />
    </>
  );
}
