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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 76px;
  p {
    font-size: 21px;
    line-height: 160%;
    letter-spacing: -0.035em;
  }
`;

const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  list-style: none;
`;
