import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState({
    about: true,
    projects: false,
    blog: false,
    contact: false,
  });
  function changeActiveLink(trueActive) {
    setActiveLink((prev) =>
      Object.fromEntries(
        Object.keys(prev).map((key) => [key, key === trueActive])
      )
    );
  }
  function toggleMobileMenu() {
    setOpenMobileMenu((prev) => !prev);
  }
  return (
    <div className="relative h-[50px] md:h-[100px]">
      <div className="fixed top-0 left-0 w-full z-30 bg-clip-padding backdrop-blur-sm  duration-1000 ease-in-out  ">
        <div
          className={`max-w-7xl mx-auto md:px-8 7xl:px-1 pt-4 md:pt-8 px-4 sm:px-8 pb-4 md:pb-5 relative boxShadow ${
            openMobileMenu && "bg-accent/60 backdrop-blur-lg md:bg-transparent"
          }`}
        >
          <div
            className={` py-2 px-2 md:py-0 md:px-0 z-10    flex items-start md:items-center justify-between gap-x-8 `}
          >
            <div className="flex flex-col items-end gap-y-5 justify-end relative">
              <div className="flex gap-x-4 items-center justify-center ">
                <a href="#" className="z-20">
                  <span className="hero-font text-xl md:text-2xl text-accent-content">
                    &lt;Logo /&gt;
                  </span>
                </a>
                <input
                  type="checkbox"
                  value="dark"
                  className="toggle theme-controller w-[35px] md:w-[40px]"
                />
              </div>

              {openMobileMenu && (
                <div className=" w-full md:hidden transition-all duration-700  ">
                  <ul className="flex flex-col items-start gap-y-2  ps-10 hero-font text-lg text-accent-content">
                    <li className="cursor-pointer hover:text-primary">
                      <a href="#about" onClick={toggleMobileMenu}>
                        About
                      </a>
                    </li>

                    <li
                      className="cursor-pointer  hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      <a href="#projects">Projects</a>
                    </li>
                    <li
                      className="cursor-pointer  hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      <a href="#blog">Blogs</a>
                    </li>
                    <li
                      className="cursor-pointer  hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      <a href="#experience">Experience</a>
                    </li>
                    <li
                      className="cursor-pointer hover:text-primary md:hover:text-primary-content btn-link md:btn btn-sm btn-primary"
                      onClick={toggleMobileMenu}
                    >
                      <a href="#contact">Contact Me</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* nav items for large screen */}
            <div className="hidden md:flex items-center justify-between md:gap-x-6 lg:gap-x-10 z-20">
              <ul className="flex items-center md:gap-x-8 lg:gap-x-10 ">
                <li
                  className={`cursor-pointer hover:underline hover:decoration-primary decoration-2 `}
                  // onClick={() => changeActiveLink("about")}
                >
                  <a href="#about">About</a>
                </li>

                <li
                  className={`cursor-pointer  hover:underline hover:decoration-primary decoration-2 `}
                  // onClick={() => changeActiveLink("projects")}
                >
                  <a href="#projects">Projects</a>
                </li>
                <li
                  className={`cursor-pointer  hover:underline hover:decoration-primary decoration-2 `}
                  // onClick={() => changeActiveLink("blog")}
                >
                  <a href="#blog">Blogs</a>
                </li>
                {/* <li className="cursor-pointer  hover:underline hover:decoration-primary decoration-">
                  <a href="#experience">Experience</a>
                </li> */}
                <li
                  className={`cursor-pointer  text-accent-content btn btn-outline btn-sm hover:bg-primary hover:text-primary-content  `}
                  // onClick={() => changeActiveLink("contact")}
                >
                  <a href="#contact">Contact Me</a>
                </li>
              </ul>
            </div>

            <div
              className={`border p-1 border-dotted rounded flex items-center justify-center cursor-pointer md:hidden `}
              onClick={toggleMobileMenu}
            >
              <LuMenu className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
