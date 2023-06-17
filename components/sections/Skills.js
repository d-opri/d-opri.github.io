import styled from "styled-components";
import SectionElement from "./Container";
import { Fade } from "react-awesome-reveal";
import LinkAnimation from "../LinkAnimation";

export default function Skills() {
  return (
    <SectionElement id="Skills" title="Skills">
      <List>
        <Fade cascade direction="up">
          <Item>
            <p>React</p>
          </Item>
          <Item>
            <p>Next JS</p>
          </Item>
          <Item>
            <p>Node JS</p>
          </Item>
          <Item>
            <p>MongoDB</p>
          </Item>
          <Item>
            <LinkAnimation href="Certificate_Frontend.pdf">
              Developer Certificate
            </LinkAnimation>
          </Item>
        </Fade>
      </List>
      <List>
        <Fade cascade direction="up">
          <Item>
            <p>Figma</p>
          </Item>
          <Item>
            <p>HTML5 & CSS</p>
          </Item>
          <Item>
            <p>UX Design</p>
          </Item>
          <Item>
            <p>UX Research</p>
          </Item>
          <Item>
            <LinkAnimation href="Certificate_UX.pdf">
              UX Design Certificate
            </LinkAnimation>
          </Item>
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
  font-size: 1.3rem;
  line-height: 1.8em;
  font-weight: 300;

  p {
    opacity: 0.7;
  }

  a {
    opacity: 1;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 132.52%;
    letter-spacing: -0.045em;

    a {
      font-size: 1.5rem;
    }
  }
`;
