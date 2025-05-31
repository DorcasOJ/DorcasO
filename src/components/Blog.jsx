import React from "react";
import data from "../data/inputs";

const Blog = () => {
  return (
    <div
      className="px-6 py-22 md:my-10 w-full h-full flex items-center justify-center flex-col bg-base-300"
      id="blog"
    >
      <span className="hero-font text-accent-content text-sm flex items-center justify-start  w-full gap-x-4">
        <hr className="w-[70px]" />
        My technical writeups
      </span>

      <div className=" flex items-center justify-center pt-15 sm:pt-8  ">
        <div className="w-full sm:w-[80%]  flex flex-col gap-y-15 sm:gap-y-12 ">
          {data?.blogs?.map((article) => (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className=" h-[100px] w-full sm:flex-2 sm:h-full ">
                <a href={`${article.link}`} target="_blank">
                  <img
                    src={`${article.image_url}`}
                    alt=""
                    className="object-cover h-full w-full rounded cursor-pointer"
                  />
                </a>
              </div>
              <div className="flex-4 flex flex-col gap-y-1 items-start justify-center text-center sm:text-left">
                <span className="text-sm sm:text-base md:text-lg font-medium text-center sm:text-left w-full ">
                  {article.name}
                </span>

                <p className="text-xs md:text-sm text-gray-500">
                  {article.description}
                </p>
                <span className="text-sm self-center sm:self-start">
                  <a
                    href={`${article.link}`}
                    target="_blank"
                    className="underline text-primary hover:text-accent-content"
                  >
                    View
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
