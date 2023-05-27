import Hero from "../../components/Hero";
import About from "../../components/newComponents/About";
import Skills from "../../components/newComponents/Skills";
import Contact from "../../components/newComponents/Contact";

import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
