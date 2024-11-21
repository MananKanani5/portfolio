import React from "react";
import heroImg from "../assets/images/heroImg.png";
import { Link } from "react-router-dom";
import heroImgBg from "../assets/images/heroBgStyle.png";
import leetcode from "../assets/icons/leetcode.svg";

import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

const Hero = () => {
  return (
    <section className=" w-full bg-secondary p-5 pb-0 overflow-hidden ">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center max-sm:flex-col">
        <div className="flex flex-col gap-44 max-sm:gap-14 max-sm:mt-14 max-sm:z-50">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-lighttext font-bold animate__animated animate__fadeInUp">
              I'm Manan Kanani
            </h1>
            <h2 className="text-3xl max-sm:text-2xl text-lighttext animate__animated animate__fadeInUp">
              Full-Stack Developer
            </h2>
            <Link
              className="text-primaryHover hover:text-primary duration-300 font-semibold w-fit flex gap-1 animate__animated animate__fadeInUp"
              to={"/about"}
            >
              About Me <RiArrowRightUpLine />
            </Link>
          </div>

          <div className="flex gap-5">
            <a
              className="text-lighttext hover:scale-110 duration-300 animate__animated animate__fadeInUp"
              href="https://github.com/MananKanani5/"
              target="_blank"
            >
              <RiGithubFill />
            </a>
            <a
              className="text-lighttext hover:scale-110 duration-300 animate__animated animate__fadeInUp"
              href="https://www.linkedin.com/in/manan-kanani/"
              target="_blank"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              className="text-lighttext hover:scale-110 duration-300 animate__animated animate__fadeInUp"
              href="https://leetcode.com/manankanani/"
              target="_blank"
            >
              <img src={leetcode} className="duration-300" />
            </a>
          </div>
        </div>
        <div>
          <img
            className="z-40 relative max-sm:scale-110 animate__animated animate__fadeIn "
            src={heroImg}
          />
          <img
            className="absolute top-20 max-sm:top-2/3 max-sm:right- z-0 right-0 opacity-70 animate__animated animate__fadeIn"
            src={heroImgBg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
