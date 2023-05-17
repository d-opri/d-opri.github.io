import styled from "styled-components";
import Container from "./Container";

export default function Skills() {
  return (
    <Container id="Skills" title="Skills">
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
    </Container>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3.5rem;
`;

const ListGroup = styled.ul`
  list-style: none;
`;
