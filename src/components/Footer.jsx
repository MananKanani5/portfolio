import { RiHeartFill } from "@remixicon/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className=" w-full z-40 relative bg-secondary p-5">
        <div className="max-w-[1280px] mx-auto  text-center">
          <h4 className="text-lighttext">
            Created with
            <span>
              <RiHeartFill className="w-fit inline-block mx-2 text-[#ad1616]" />
            </span>
            by Manan Kanani
          </h4>
        </div>
      </section>
    </>
  );
};

export default Footer;
