import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "@remixicon/react";
import ProjectsItem from "../Projects.json";
import Project from "./Project";

const ProjectSection = ({ isHome }) => {
  const Projects = isHome ? ProjectsItem.slice(0, 3) : ProjectsItem;
  return (
    <section className=" w-full relative bg-lighttext z-40">
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
          <div className={`${isHome ? "" : "w-full text-center"}`}>
            <h1 className="text-5xl text-secondary font-bold mb-4 animate__animated animate__fadeIn">
              Projects
            </h1>
            <p className="animate__animated animate__fadeIn">
              Discover my portfolio featuring a variety of projects.
            </p>
          </div>
          <div className={`${isHome ? "block" : "hidden"}`}>
            <Link
              className="text-primary hover:text-primaryHover font-semibold duration-300 w-fit flex gap-1 max-sm:mt-3 animate__animated animate__fadeIn"
              to={"/portfolio"}
            >
              See All Projects <RiArrowRightUpLine />
            </Link>
          </div>
        </div>

        <div className="flex gap-5 mt-7 flex-wrap justify-between">
          {Projects.map((project) => (
            <Project to={project.slug} key={project.id}>
              <img
                className="animate__animated animate__fadeIn"
                loading="lazy"
                src={project.imgLink}
                alt={project.title}
              />
              <h1 className="text-center text-xl text-lighttext mb-2">
                {project.title}
              </h1>
            </Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
