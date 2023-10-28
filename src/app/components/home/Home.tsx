// import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const Hom = () => {
  return (
    <div>
      <section id="Home" className="w-full">
        <div className="h-5/6 flex justify-center items-center text-center">
          <div id="Image bg-kundan "></div>
          <div id="details">
            <p className="text-gray-700 font-semibold">Hello, I am</p>
            <p className="text-5xl md:text-6xl font-semibold my-4">Kundan Patel</p>
            <p className="text-3xl md:text-4xl text-gray-600 font-semibold">
              Frontend Developer
            </p>
          </div>
        </div>
        <div id="top_down">
          <AiOutlineArrowDown />
        </div>
      </section>
    </div>
  );
};

export default Hom;
