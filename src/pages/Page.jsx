import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const Page = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto md:px-8 7xl:px-1 pt-8 px-4 sm:px-8 pb-5 relative">
        <About />
        <Projects />
      </div>
      <Blog />

      <div className="max-w-5xl mx-auto md:px-8 7xl:px-1 pt-8 px-4 sm:px-8 pb-5 relative">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
