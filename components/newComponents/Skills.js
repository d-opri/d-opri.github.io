import styled from "styled-components";
import SectionElement from "./Container";

export default function Skills() {
  return (
    <SectionElement id="Skills" title="Skills">
      <List>
        <Item>React</Item>
        <Item>Next JS</Item>
        <Item>Node JS</Item>
        <Item>MongoDB</Item>
      </List>
      <List>
        <Item>Figma</Item>
        <Item>HTML & CSS</Item>
        <Item>UX Design</Item>
        <Item>UX Research</Item>
      </List>
    </SectionElement>
  );
}

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
`;

export const Item = styled.li`
  text-align: right;
  opacity: 0.7;
  font-size: 22px;
  line-height: 1.8em;

  word-break: break-word;
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
