import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  let menuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll", isMenuOpen);
  };

  return (
    <section className=" w-full bg-secondary sticky top-0 z-[999] max-sm:-mb-1 max-sm:p-0">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between animate__animated animate__fadeInDown max-sm:p-5 py-5">
        <Link to={"/"} className="logo z-50">
          <h1 className="text-lighttext font-bold text-3xl z-[999]">MK.</h1>
        </Link>

        <button onClick={menuHandle} className="max-sm:block hidden z-[999]">
          {isMenuOpen ? (
            <RiMenu2Line className="text-lighttext" />
          ) : (
            <RiCloseLine className="text-lighttext" />
          )}
        </button>

        <div
          className={`navbar flex gap-6 items-center text-lighttext max-sm:flex-col max-sm:fixed max-sm:bg-secondary max-sm:z-50 max-sm:w-full max-sm:h-screen max-sm:top-0 max-sm:pt-24 max-sm:left-0 duration-300 ${
            isMenuOpen ? "max-sm:translate-x-full" : "max-sm:translate-x-0"
          }`}
        >
          <NavLink
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            to={"/"}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            to={"/about"}
            onClick={closeMenu}
          >
            About Me
          </NavLink>
          <NavLink
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            to={"/portfolio"}
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            to={"/contact"}
            onClick={closeMenu}
          >
            Contact Me
          </NavLink>
          <Link
            className="bg-primary hover:bg-primaryHover duration-300 px-5 py-2 rounded-xl"
            to={"/resume"}
            onClick={closeMenu}
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
