import styled from "styled-components";

export default function Hero() {
  return (
    <StyledHero>
      <h1> Dani Opri</h1>
      <p> Front-end Developer and UX Designer</p>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  h1 {
    // font-style: italic;
    font-size: 7.188rem;
  }

  p {
    font-size: 3.125rem;
  }

  @media screen and (min-width: 375px) {
    height: 70vh;
    margin-bottom: 2rem;
    text-align: center;
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1rem;
      line-height: 5rem;
    }
  }
`;
