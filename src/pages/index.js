import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Contact from "../../components/sections/Contact";
import Work from "../../components/sections/Work";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Fade direction="left">
        <About />
        <Work />
        <Skills />
        <Contact />
      </Fade>
    </>
  );
}
