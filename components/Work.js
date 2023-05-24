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
            <li key={index}>
              <Project {...project} />
            </li>
          );
        })}
      </StyledList>
    </HiddenElement>
  );
}

// const StyledSection = styled(HiddenElement)`
//   && @media screen and (min-width: 834px) {
//     flex-direction: row wrap;
//     align-items: flex-start;
//     gap: 32px;

//     li {
//       margin-bottom: 56px;
//     }
//   }
// `;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 4.688rem;
`;
