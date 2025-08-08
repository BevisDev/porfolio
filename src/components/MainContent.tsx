"use client";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Header from "./Header";
import { useState } from "react";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <section className="flex justify-center gap-5 w-full px-6">
      <Header onChange={setActiveSection} active={activeSection} />

      <div className="py-20">
        {activeSection == "About" && <About />}
        {activeSection == "Experience" && <Experience />}
        {activeSection == "Projects" && <Projects />}
      </div>
    </section>
  );
};

export default MainContent;
