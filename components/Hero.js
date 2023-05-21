import styled from "styled-components";
import HiddenElement from "./Container";

export default function Hero() {
  return (
    <HiddenElement id="Hero">
      <StyledHero>
        <h1> Dani Opri</h1>
        <p> Front-end Developer and UX Designer</p>
      </StyledHero>
    </HiddenElement>
  );
}

const StyledHero = styled.div`
  text-align: center;

  h1 {
    font-style: italic;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
