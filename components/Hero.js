import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: center;
  padding: 18rem 15rem;
  gap: 19px;
  position: relative;
  height: 100vh;
  h1 {
    font-size: clamp(3rem, 10vw, 5rem);
    letter-spacing: -4px;
    line-height: 1.2em;
    font-style: italic;
    font-weight: 600;
    line-height: 8rem;
  }
  p {
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: 500;
    line-height: 58px;
  }
  @media screen and (max-width: 500px) {
    padding: 5rem 4rem;

    h1 {
      font-weight: 500;
      line-height: 3rem;
    }
    p {
      font-weight: 400;
    }
  }
`;

export default function Hero() {
  return (
    <Container>
      <h1> Dani Opri</h1>
      <p> Front-end Developer and UX Designer</p>
    </Container>
  );
}
