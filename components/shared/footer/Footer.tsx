import { socialLinks } from "@/constants/index";
import { useTranslations } from "next-intl";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import Language from "./Language";
import Authentication from "./Authentication";
export default function Footer() {
  const t = useTranslations("NavBar");
  const f = useTranslations("Footer");
  const i = useTranslations("Index");

  const headerMenu = [
    {
      name: t("main"),
      link: "/",
    },
    {
      name: t("aboutUs"),
      link: "/aboutUs",
    },
    {
      name: t("ourProduct"),
      link: "products",
    },
    {
      name: t("main"),
      link: "contacuUs",
    },
  ];
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <h1 className="font-bold text-2xl text-white"> {i("title")}</h1>
        <p className="my-6 text-gray-500 dark:text-gray-400">{f("content")}</p>
        <ul className="flex flex-wrap justify-center items-center text-gray-900 dark:text-white">
          {headerMenu.map((el: { name: string; link: string }) => {
            return <Menu name={el.name} link={el.link} key={el.name} />;
          })}
        </ul>
        {/* ------------------------- */}
        <Language/>
        <div className="w-full flex flex-row justify-center ">
          <ul className="flex flex-row gap-x-8">
            {socialLinks.map((link) => (
              <>
                <SocialMedia
                  Icon={link.icon}
                  id={link.id}
                  url={link.url}
                  key={link.id}
                />
              </>
            ))}
          </ul>
        </div>

        <Authentication/>
      </div>
    </footer>
  );
}
