import { socialLinks } from "@/constants/index";
import { useTranslations } from "next-intl";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
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
        <div className=" flex flex-row space-x-5 w-full justify-center mt-5 ">
          <p className="cursor-pointer">
            <Link href={`/ar`}>العربية</Link>
          </p>
          <Link href={`/en`}>english</Link>
        </div>
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

        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2024{" "}
          <Link href="/" className="hover:underline">
            شذى الشام
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
