import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  const github = import.meta.env.VITE_GITHUB;
  const linkedIn = import.meta.env.VITE_LINKEDIN;
  const email = import.meta.env.VITE_EMAIL;
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <div className="max-w-7xl mx-auto md:px-8 7xl:px-1 pt-4 md:pt-8 px-4 sm:px-8 pb-4 md:pb-5 ">
          <nav className="grid grid-flow-col gap-8 text-sm">
            <a
              href="/images/cv/DorcasOJ-CV-m.pdf"
              download="DorcasOlajideCV.pdf"
              className="link link-hover hover:decoration-primary"
            >
              CV
            </a>

            <a
              className="link link-hover hover:decoration-primary"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="link link-hover hover:decoration-primary"
              href="#blog"
            >
              Blog
            </a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4 my-4">
              <a href={`mailto:${email}`}>
                <MdOutlineAlternateEmail className="cursor-pointer hover:text-primary text-3xl" />
              </a>

              <a href={`${linkedIn}`}>
                <FaLinkedin className="cursor-pointer hover:text-primary text-3xl" />
              </a>
              <a href={`${github}`}>
                <FaGithub className="cursor-pointer hover:text-primary text-3xl" />
              </a>
            </div>
          </nav>
          <aside>
            <p>© Dorcas Olajide {new Date().getFullYear()}</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
