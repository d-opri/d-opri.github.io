import styled from "styled-components";
import Project from "../../components/Project";
import Hero from "../../components/Hero";

const PROJECTS = [
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "here comes the description of the project in two three sentences",
    image: "/Iphone.png",
    alt: "bunny",
    link: "/",
  },
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "here comes the description of the project in two thrdescription of the project in two threeee sentences",
    image: "/Iphone.png",
    alt: "bunny",
    link: "/",
  },
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description: "here c in two three sentences",
    image: "/Iphone.png",
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
              <Project {...project} />
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
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin: 1rem;
`;
