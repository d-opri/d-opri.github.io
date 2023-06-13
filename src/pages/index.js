import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Work from "../../components/Work";
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
