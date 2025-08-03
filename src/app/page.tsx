import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <Header />
      <Hero />
      <Skills/>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
