import SectionElement from "./Container";
import Project from "./Project";
import styled from "styled-components";
import { useFetch } from "../utils/useFetch";
import ProjectSlide from "./ProjectSlide";

export default function Work() {
  const { data, isLoading, isError } = useFetch("json/projects.json");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <SectionElement id="Work">
      <ProjectList>
        {data.map((project, index) => {
          return (
            <li key={index}>
              <ProjectSlide {...project} />
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
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;
