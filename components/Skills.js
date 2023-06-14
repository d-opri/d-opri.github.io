import styled from "styled-components";
import SectionElement from "./Container";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <SectionElement id="Skills" title="Skills">
      <List>
        <Fade cascade direction="up">
          <Item>React</Item>
          <Item>Next JS</Item>
          <Item>Node JS</Item>
          <Item>MongoDB</Item>
        </Fade>
      </List>
      <List>
        <Fade cascade direction="up">
          <Item>Figma</Item>
          <Item>HTML & CSS</Item>
          <Item>UX Design</Item>
          <Item>UX Research</Item>
        </Fade>
      </List>
    </SectionElement>
  );
}

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  flex-basis: 50%;
`;

export const Item = styled.li`
  text-align: right;
  opacity: 0.7;
  font-size: 1.3rem;
  line-height: 1.8em;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 132.52%;
    letter-spacing: -0.045em;
  }
`;
