import SectionElement from "./Container";
import Project from "./Project";
import styled from "styled-components";
import { useFetch } from "../utils/useFetch";

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
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  height: min-content;

  @media (min-width: 768px) {
    gap: 50vh;
  }
`;
