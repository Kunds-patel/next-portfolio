import React from "react";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className="max-w-7xl w-full mx-auto mt-3 fixed">
      <div className="flex mx-5 justify-between items-center">
        <button className="logo text-2xl" id="#">
          Kundan <span className="text-blue-500">Patel</span>
        </button>
        <div className="hidden md:block">
          <ul className="flex gap-16">
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
