import Hero from "../../components/Hero";
import About from "../../components/newComponents/About";
import Skills from "../../components/newComponents/Skills";
import Contact from "../../components/newComponents/Contact";
import Work from "../../components/newComponents/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
