import SectionElement from "./Container";
import { PROJECTS } from "../json/data";
import Project from "./Project";
import styled from "styled-components";

export default function Work() {
  return (
    <SectionElement id="Work" title="Work">
      <ProjectList>
        {PROJECTS.map((project, index) => {
          return (
            <li key={index}>
              <Project {...project} />
            </li>
          );
        })}
      </ProjectList>
    </SectionElement>
  );
}

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
