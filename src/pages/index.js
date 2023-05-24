import Head from "next/head";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Work from "../../components/Work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
