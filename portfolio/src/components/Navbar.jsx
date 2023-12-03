import React, { useEffect, useState } from "react";
import { NavLink, Link, BrowserRouter } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOPen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div
      className={`flex justify-between bg-blue-900 fixed w-full  top-0 z-[99] right-[-2] rounded-s-xl  ${
        sticky ? "md:bg-white/60 text-gray-800" : "text-white"
      }`}
    >
      <div className="mx-7">
        <div className="text-4xl  font-bold text-white py-3">
          Ma<span className="text-emerald-500">bis</span>ha{" "}
        </div>
      </div>
      <div className="text-gray-600 md:block hidden px-4  py-4 font-medium bg-white  rounded-b-full">
        <ul className="flex justify-center gap-8 text-lg ">
          <li className="hover:text-cyan-600">
            <NavLink to="/hero">HOME</NavLink>
          </li>
          <li className="hover:text-cyan-600">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="hover:text-cyan-600">
            <NavLink to="/skills">SKILLS</NavLink>
          </li>
          <li className="hover:text-cyan-600">
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li className="hover:text-cyan-600">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setOPen(!open)}
        className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"}
         
    text-3xl md:hidden m-5`}
      >
        <ion-icon name="menu">
          <div className="md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-cursive bg-white top-0 right-0 ">
            <ul>
              <li>
                <Link to="/hero">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </ion-icon>
        {/* <div className="z-[999] text-3xl">
          {" "}
          <ion-icon name="menu"></ion-icon>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
