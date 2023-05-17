import styled from "styled-components";
import Container from "./Container";

const Header = styled.header`
  text-align: center;
  line-height: 3rem;
`;

export default function Hero() {
  return (
    <Container>
      <Header>
        <h1> Dani Opri</h1>
        <p> Front-end Developer and UX Designer</p>
      </Header>
    </Container>
  );
}
