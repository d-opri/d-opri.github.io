import styled from "styled-components";
import LinkAnimation from "./LinkAnimation";

export default function LinksGroup() {
  return (
    <List>
      <Item>
        <LinkAnimation>dani.opri@protonmail.com</LinkAnimation>
      </Item>
      <Item>
        <LinkAnimation>Github</LinkAnimation>
      </Item>
      <Item>
        <LinkAnimation>Behance</LinkAnimation>
      </Item>
      <Item>
        <LinkAnimation>LinkedIn</LinkAnimation>
      </Item>
    </List>
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
