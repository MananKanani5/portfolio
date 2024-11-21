import React from "react";
import pageNotFound from "../assets/images/pageNotFound.svg";

const PageNotFound = () => {
  return (
    <section className=" w-full relative bg-lighttext z-40">
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5">
        <img src={pageNotFound} className="w-1/2 max-sm:w-full mx-auto" />
      </div>
    </section>
  );
};

export default PageNotFound;
