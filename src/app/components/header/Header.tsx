import React from "react";
import style from "./style.module.css";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className={style.header_main}>
      <div className="flex w-full mx-5 justify-between items-center">
        <a className="logo text-3xl lg:text-4xl" href="#Home">
          Kundan <span className="text-blue-500">Patel</span>
        </a>
        <div className="hidden md:block">
          <ul className="flex gap-10 text-xl lg:text-2xl lg:gap-16">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <button className="mr-3 md:hidden">
          <LuMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
