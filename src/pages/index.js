import Hero from "../../components/Hero";
import About from "../../components/newComponents/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Work from "../../components/Projects";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      {/* <About />
      <Skills />
      <Work />
      <Contact /> */}
    </>
  );
}
