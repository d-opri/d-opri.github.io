import styled from "styled-components";
import { PROJECTS } from "./projectDB";
import Project from "./Project";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  const containerClassName = `hidden ${inView ? "show" : ""}`;

  return (
    <Container ref={ref} id="Work" className={containerClassName}>
      <Header>
        <h1>Work</h1>
      </Header>
      <ProjectList>
        {PROJECTS.map((project, index) => {
          return (
            <li key={index}>
              <Project {...project} />
            </li>
          );
        })}
      </ProjectList>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  //   gap: 132px;
  margin-inline: auto;
`;

const Header = styled.header`
  h1 {
    font-weight: 500;
    font-size: 92px;
    line-height: 134.52%;
    /* identical to box height, or 124px */

    transition-delay: 200ms;
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  margin-top: 3.25rem;

  transition-delay: 500ms;
  z-index: 9;

  @media screen and (max-width: 834px) {
    margin-top: 3rem;
  }
`;
