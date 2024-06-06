import { useTranslations } from 'next-intl';
import React from 'react'

export default function AboutUstitle() {
        const t = useTranslations("AboutUspage");

  return (
    <>
      <p className="text-blk heading">{t("title")}</p>
      <p className="text-blk subHeading">{t("content")}</p>
    </>
  );
}
