"use client";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { headerMenu } from "../../../constants/index";
import MenuSm from "./MenuSm";
import "./navbar.css";
import MenuXl from "./MenuXl";
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
  return (
    <div
      className={`gpt3__navbar fixed w-full z-50 ${
        scrolled && "bg-white shadow-2xl text-gray-900"
      }`}
    >
      <div className={`gpt3__navbar-links w-full `}>
        <div className="gpt3__navbar-links_logo">
          <h1 className="text-3xl">شذى الشام</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          {headerMenu.map((el) => {
            return <MenuXl name={el.name} link={el.link} key={el.link} scrolled={scrolled} />;
          })}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
