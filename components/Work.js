import styled from "styled-components";
import HiddenElement from "./Container";
import Project from "./Project";
import { PROJECTS } from "./projectDB";

export default function Work() {
  return (
    <HiddenElement id="Work" title="Work">
      <StyledList>
        {PROJECTS.map((project, index) => {
          return (
            <StyledItem key={index}>
              <Project {...project} />
            </StyledItem>
          );
        })}
      </StyledList>
    </HiddenElement>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 7rem;
  flex-flow: column nowrap;
`;

const StyledItem = styled.li``;
