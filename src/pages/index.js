import styled from "styled-components";

import Hero from "../../components/Hero";
import ProjectSlide from "../../components/ProjectSlide";
import { StyledBigTitle } from "../../components/Fonts";
import Head from "next/head";
import About from "../../components/About";

const PROJECTS = [
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "here comes the description of the phere comes the description of the project in two thrroject in two three sentences",
    image: "/IPhone.svg",
    alt: "bunny",
    link: "/",
  },
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "here comes the description of the prohere comes the description of the project in two thrject in twohere comes the description of the project in two thr thrdescription of the project in two threeee sentences",
    image: "/IPhone.svg",
    alt: "bunny",
    link: "/",
  },
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "here c in two three sentenhere comes the description of the project in two thrhere comes the description of the project in two thrces",
    image: "/IPhone.svg",
    alt: "bunny",
    link: "/",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      {/* <StyledBigTitle>Moin Moin</StyledBigTitle> */}

      <Hero />
      <About />
      {/* <StyledList>
        {PROJECTS.map((project, index) => {
          return (
            <StyledItem key={index}>
              <ProjectSlide {...project} />
            </StyledItem>
          );
        })}
      </StyledList> */}
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  overflow: auto;
  scroll-snap-type: y proximity;
  display: flex;
  gap: 4rem;
  flex-flow: column nowrap;
  outline: dashed red;
`;

const StyledItem = styled.li`
  scroll-snap-align: start;
`;
