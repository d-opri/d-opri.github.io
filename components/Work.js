import styled from "styled-components";
import Container from "./Container";
import Project from "./Project";
import { PROJECTS } from "./projectDB";

export default function Work() {
  return (
    <Container id="Work" title="Work">
      <StyledList>
        {PROJECTS.map((project, index) => {
          return (
            <StyledItem key={index}>
              <Project {...project} />
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
