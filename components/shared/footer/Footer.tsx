import { headerMenu, socialLinks } from "@/constants/index";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import Menu from "./Menu";
export default function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <h1 className="font-bold text-2xl text-white">شذى الشام</h1>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          تخصصين في تقديم مواد غذائية عالية الجودة، تتميز منتجاتنا بالنكهة
          الفريدة والقيمة الغذائية العالية
        </p>
        <ul className="flex flex-wrap justify-center items-center text-gray-900 dark:text-white">
          {headerMenu.map((el: { name: string; link: string }) => {
            return (
                <Menu name={el.name} link={el.link} key={el.name} />
              
            );
          })}
        </ul>
        {/* ------------------------- */}
        <div className="w-full flex flex-row justify-center ">
          <ul className="flex flex-row gap-x-8">
            {socialLinks.map((link) => (
              <>
                <SocialMedia Icon={link.icon} id={link.id} url={link.url} key={link.id} />
              </>
            ))}
          </ul>
        </div>

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            شذى الشام
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
