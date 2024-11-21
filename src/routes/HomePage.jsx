import React from "react";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectSection isHome={true} />
    </>
  );
};

export default HomePage;
