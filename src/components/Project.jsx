import React from "react";
import { Link } from "react-router-dom";

const Project = ({ children, to }) => {
  return (
    <div className="rounded-2xl p-2 w-[32%] max-sm:w-full bg-secondary shadow-lg relative animate__animated animate__fadeIn ">
      {children}
      <Link
        to={"/portfolio/" + to}
        className="absolute left-0 top-0 w-full h-full"
      ></Link>
    </div>
  );
};

export default Project;
