import Footer from "@/app/footer/Footer";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <section id="Contact" className="flex-col h-auto items-center">
        <h2 id="title">Contact</h2>
        <h2 className="text-3xl text-center font-extrabold">Get In Touch</h2>
        <div id="top_down">{/* <AiOutlineArrowUp /> */}</div>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
