import React from "react";
import { CiChat2, CiMail } from "react-icons/ci";
import { FaMedium } from "react-icons/fa";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const About = () => {
  const fileId = import.meta.env.VITE_CV_FILE_ID;
  const github = import.meta.env.VITE_GITHUB;
  const linkedIn = import.meta.env.VITE_LINKEDIN;
  const medium = import.meta.env.VITE_MEDIUM;

  console.log(fileId);
  return (
    <div id="about">
      <div className=" ">
        <div className="py-8 md:pt-0 flex items-center justify-center flex-col md:flex-row md:gap-x-8 gap-y-22  ">
          <div
            className="md:rounded-lg md:w-[40%] w-full flex flex-col items-center  justify-center  gap-y-3
          md:bg-accent-content/5 pt-5
          "
          >
            <img
              src="/images/dorcas-img-1.jpg"
              alt=""
              className="object-contain rounded-full h-40 w-40"
            />
            <div className="flex flex-col items-center justify-center gap-y-3 w-full">
              <h2 className="font-semibold">&lt; Dorcas Olajide /&gt;</h2>
              <span className="text-secondary-content font-light text-2xl px-2 text-center hero-font">
                Full Stack Web Developer
              </span>
              <div className="flex items-center justify-center gap-x-2">
                <a
                  href={`${github}`}
                  className="border rounded-full p-2 cursor-pointer hover:text-primary-content hover:bg-secondary-content"
                >
                  <FiGithub />
                </a>
                <a
                  href={`${linkedIn}`}
                  className="border rounded-full p-2 cursor-pointer hover:text-primary-content hover:bg-secondary-content"
                >
                  <FiLinkedin />
                </a>

                <a
                  href={`${medium}`}
                  className="border rounded-full p-2 cursor-pointer hover:text-primary-content hover:bg-secondary-content"
                >
                  <FaMedium />
                </a>
              </div>

              {/* <a
                href="#contact"
                className="text-2xl hero-font tracking-wide flex gap-x-3 items-center justify-center my-6 p-3 text-primary hover:bg-transparent hover:bg-gradient-to-bl from-primary to-secondary-content  hover:border-primary
                transition-all duration-500 ease-in-out"
              >
                <span>
                  <CiMail className="" />
                </span>
                <span className="text-xl font-light">Hire me</span>
              </a> */}

              <div className="flex items-center justify-center w-full pt-2 mt-4">
                <a
                  href={`https://drive.google.com/file/d/${fileId}/view?usp=sharing`}
                  target="_blank"
                  className="flex-1 whitespace-nowrap text-sm lg:text-base w-full p-3 cursor-pointer shadow flex items-center justify-center gap-1 bg-accent-content/20 hover:text-primary hover:bg-transparent hover:border-primary
                  transition-all duration-500 ease-in-out"
                >
                  Download Cv
                  <FiDownload className="text-base" />
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-sm lg:text-base w-full p-3 cursor-pointer shadow  flex items-center justify-center gap-1 bg-accent-content/20 hover:text-primary hover:bg-transparent hover:border-primary 
                  transition-all duration-500 ease-in-out"
                >
                  Contact Me <CiChat2 className="text-base" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-full  flex flex-col gap-y-8 items-start">
            <p className=" flex items-center justify-center text-accent-content gap-x-4 text-sm pt-6">
              <span className="hero-font "> About me </span>
              <hr className="w-[70px]" />
            </p>
            <div className="flex flex-col gap-y-5">
              <p className="hero-font text-3xl">
                I am <span className="text-primary">Dorcas Olajide</span>{" "}
              </p>
              <p className="tracking-wide text-justify text-base/7">
                I am developer with over 5 years experience with exposure to
                machine learning environment. I currently specialize in both
                frontend and backend development, crafting friendly user
                interface with ReactJS and building robust server-side systems.
                I enjoy translating design and ideas into web apps and have
                experience working with APIs, Git, and responsive design
                practices. I am dedicated to continuous learning and ready to
                work with teams to deliver exceptional value. Let's work
                together to bring your project to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
