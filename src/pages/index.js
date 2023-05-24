import Head from "next/head";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Work from "../../components/Work";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <Hero />
      <Projects />
      {/* <About />
      <Skills />
      <Work />
      <Contact /> */}
    </>
  );
}
