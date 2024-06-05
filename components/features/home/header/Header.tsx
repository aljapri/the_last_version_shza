import React from 'react'
import { useTranslations } from "next-intl";

import "./header.css";
export default function Header() {
    const t = useTranslations("Header");

  return (
    <main className="center  ">
      <section className="hero bg-cover bg-center h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold max-xl:text-2xl">{t("title")}</h1>
          <p className="mt-4 text-3xl max-xl:text-xl">{t("subTitle")}</p>
        </div>
      </section>
    </main>
  );
}
