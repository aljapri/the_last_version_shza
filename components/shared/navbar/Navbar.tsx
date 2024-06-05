"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import MenuSm from "./MenuSm";
import MenuXl from "./MenuXl";
import "./navbar.css";
import Link from "next/link";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const t = useTranslations("NavBar");
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
      name: t("contactUs"),
      link: "contactUs",
    },
  ];
  return (
    <div
      className={`gpt3__navbar fixed w-full z-50 ${
        scrolled && "bg-white shadow-2xl text-gray-900"
      }`}
    >
      <div
        className={`gpt3__navbar-links w-full  flex flex-row justify-center `}
      >
        <div className="gpt3__navbar-links_logo">
          <h1 className="text-3xl">{i("title")}</h1>
        </div>
        <div className="gpt3__navbar-links_container ">
          {headerMenu.map((el) => {
            return (
              <MenuXl
                name={el.name}
                link={el.link}
                key={el.link}
                scrolled={scrolled}
              />
            );
          })}
          <div className=" flex flex-row space-x-5 justify-center  ">
            <p className="cursor-pointer">
              <Link href={`/ar`} className={`${scrolled && "text-gray-900"}`}>
                العربية
              </Link>
            </p>
            <Link href={`/en`}>english</Link>
          </div>
        </div>
      </div>

      {/* // return <MenuXl name={el.name} link={el.link} key={el.link} />; */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color={scrolled ? "green" : "#fff"}
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color={scrolled ? "green" : "#fff"}
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {headerMenu.map((el) => {
                return <MenuSm name={el.name} link={el.link} key={el.link} />;
              })}
            </div>
            <div className=" flex flex-col space-x-5 justify-center  text-gray-900 ">
              <p className="cursor-pointer">
                <Link href={`/ar`} className="text-gray-900">
                  العربية
                </Link>
              </p>
              <Link href={`/en`}>english</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
