import styled from "styled-components";
import HiddenElement from "./Container";

export default function Skills() {
  return (
    <HiddenElement id="Skills" title="Skills">
      <ListContainer>
        <ListGroup>
          <li>
            <p>UX Research</p>
          </li>
          <li>
            <p>HTML & CSS</p>
          </li>
          <li>
            <p>UX Design</p>
          </li>
        </ListGroup>
        <ListGroup>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>Figma</p>
          </li>
          <li>
            <p>Node JS</p>
          </li>
        </ListGroup>
      </ListContainer>
    </HiddenElement>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 2rem;
  p {
    line-height: 2.8rem;
  }
`;

const ListGroup = styled.ul`
  text-align: right;
  flex-grow: 1;
  list-style: none;
`;
