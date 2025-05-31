import React from "react";
import data from "../data/inputs";

const Projects = () => {
  return (
    <div
      className="py-22 md:my-10 w-full h-full flex items-center justify-center flex-col"
      id="projects"
    >
      <span className="hero-font text-accent-content text-sm flex items-center w-full  text-right justify-end gap-x-4">
        Some of my favorite projects
        <hr className="w-[70px]" />
      </span>
      <div className="w-full flex items-center justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-15 lg:gap-10 w-[70vw] md:w-full 2xl:gap-25 py-10">
          {data?.projects?.map((project) => (
            <div
              className={`relative text-white overflow-  rounded-xl flex items-center justify-center min-h-[42vh] w-full md:w-[70%] lg:w-full ms-auto group shadow 2xl:min-h-[25vh] ${project?.span}`}
              key={project.name}
            >
              <img
                src={`${project.image_url}`}
                alt=""
                className={`object-cover object-center rounded-xl w-full h-full absolute ${
                  project?.image_url_lg && "lg:hidden"
                } `}
              />

              {project?.image_url_lg && (
                <img
                  src={`${project.image_url_lg}`}
                  className={`lg:object-cover lg:object-center lg:rounded-xl w-full h-full lg:absolute lg:flex hidden  `}
                />
              )}
              <div
                className={`absolute top-0 inset-0  opacity-50   w-full h-full cursor-pointer rounded-xl ${project.bg_color}`}
              ></div>

              <div className="hidden lg:flex absolute px-2  md:h-[30px] group-hover:md:h-[100px] py-1 flex-col items-center justify-center md:justify-start gap-x-4 font-bold rounded backdrop-blur-sm bg-clip-padding hover:border group-hover:border-white/30  text-white transition-all duration-500 ease-in-out">
                <span className="md:text-lg  text-base">{project.name}</span>

                <div className="hidden md:flex opacity-0 backdrop-blur-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out py-2 flex-col gap-y-2 text-sm cursor-pointer items-center justify-center">
                  <span className="hover:text-secondary-content underline">
                    <a
                      href={`${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live link
                    </a>
                  </span>
                  <span className="hover:text-secondary-content underline">
                    <a
                      href={`${project.github_link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </span>
                </div>
              </div>

              <div className=" bottom-0 absolute px-2  md:h-[30px] py-1 flex flex-col items-center justify-center gap-x-4 font-bold rounded backdrop-blur-sm bg-clip-padding hover:border   text-white transition-all duration-500 ease-in-out">
                <span className="text-center text-base">{project.name}</span>
                <div className=" lg:hidden py-2 flex  gap-x-8 gap-y-2 text-xs cursor-pointer items-center justify-center">
                  <span className="hover:text-secondary-content underline font-bold">
                    <a
                      href={`${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live link
                    </a>
                  </span>
                  <span className="hover:text-secondary-content underline">
                    <a
                      href={`${project.github_link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
