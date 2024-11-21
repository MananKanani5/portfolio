import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectGallery = ({ project }) => {
  return (
    <PhotoProvider maskOpacity={0.7}>
      <div className="flex max-w-full overflow-hidden gap-5 items-start mt-5 flex-wrap justify-between ">
        {project.gallery.map((projectImg, index) => {
          return (
            <PhotoView key={index} src={projectImg}>
              <img
                className="w-[23%] max-sm:w-[46%] object-contain rounded-lg cursor-pointer animate__animated animate__fadeInUp"
                src={projectImg}
                loading="lazy"
                key={index}
              />
            </PhotoView>
          );
        })}
      </div>
    </PhotoProvider>
  );
};

export default ProjectGallery;
