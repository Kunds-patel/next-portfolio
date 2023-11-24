import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => (
  <div className="flex flex-col gap-10 mt-10">
    <div className="relative flex gap-8 justify-center">
      <a href="https://twitter.com/Kunds2211">
        <FaTwitterSquare size={50} />
      </a>
      <a href="https://www.linkedin.com/in/kundanpattel/">
        <FaLinkedin size={50} />
      </a>
      <a href="https://github.com/Kunds-patel">
        <FaGithubSquare size={50} />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagramSquare size={50} />
      </a>
    </div>
    <div className="text-gray-700 text-center h-14">
      Copyright © 2023 Kundan Patel. All Rights Reserved.
    </div>
    <a href="#Home" className="absolute right-5 md:hidden">
      <div id="top_down">
        <AiOutlineArrowUp />
      </div>
    </a>
  </div>
);

export default Footer;
