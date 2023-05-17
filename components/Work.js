import styled from "styled-components";
import Container from "./Container";
import ProjectSlide from "./ProjectSlide";

const PROJECTS = [
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "Here comes the description of the projehtb what . ddi and so son and so forth projehtb what . dkhwlwhdi and so son and so fo",
    image: "/IPhone.svg",
    alt: "bunny",
    link: "/",
  },
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "Here comes the description of the projehtb what . ddi and so son and so forth projehtb what . dkhwlwhdi and so son and so fo",
    image: "/IPhone.svg",
    alt: "bunny",
    link: "/",
  },
  {
    title: "bunny",
    stack: ["figma", "next js", "react", "mongoDB"],
    description:
      "Here comes the description of the projehtb what . ddi and so son and so forth projehtb what . dkhwlwhdi and so son and so fo",
    image: "/IPhone.svg",
    alt: "bunny",
    link: "/",
  },
];

export default function Work() {
  return (
    <Container id="Work" title="Work">
      <StyledList>
        {PROJECTS.map((project, index) => {
          return (
            <StyledItem key={index}>
              <ProjectSlide {...project} />
            </StyledItem>
          );
        })}
      </StyledList>
    </Container>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 7rem;
  flex-flow: column nowrap;
`;

const StyledItem = styled.li``;
