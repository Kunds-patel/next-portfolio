import React from "react";
import Header from "./components/header/Header";
import Skill from "./components/skill/skill";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Hom from "./components/home/Home";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl w-full mx-auto">
        <Header />
        <Hom />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
