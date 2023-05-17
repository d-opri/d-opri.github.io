import styled from "styled-components";
import Container from "./Container";

const StyledHero = styled.div`
  text-align: center;
  p {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export default function Hero() {
  return (
    <Container>
      <StyledHero>
        <h1> Dani Opri</h1>
        <p> Front-end Developer and UX Designer</p>
      </StyledHero>
    </Container>
  );
}
