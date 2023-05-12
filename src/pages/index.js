import styled from "styled-components";
import Project from "../../components/Project";
import Hero from "../../components/Hero";
import ProjectSlide from "../../components/ProjectSlide";

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
      <Hero />
      <StyledList>
        {PROJECTS.map((project, index) => {
          return (
            <li key={index}>
              <ProjectSlide {...project} />
            </li>
          );
        })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
  flex-flow: column nowrap;
  outline: dashed white;
`;
