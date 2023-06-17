import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const baseUrl = window.location.protocol + "//" + window.location.host + "/";
    history.replaceState(null, "", baseUrl);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop <= 100) {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 bg-primary opacity-80`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Tan Jin &nbsp;
            <span className="lg:block hidden">| Fullstack Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a onClick={() => scrollToSection(nav.id)}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a onClick={() => scrollToSection(nav.id)}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
