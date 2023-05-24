import styled from "styled-components";

export default function Hero() {
  return (
    <StyledHero>
      <span>
        <h1> Dani Opri</h1>
        <div></div>
      </span>
      <span>
        <p> Front-end Developer and UX Designer</p>
        <div></div>
      </span>
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
    font-style: italic;
    font-size: 9rem;

    animation: 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running
      header;
    transform: translateY(210px);
  }
  @keyframes header {
    0% {
      transform: translateY(150px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  div {
    position: absolute;
    background-color: black;
    margin-right: 100%;
    width: 120%;
    height: 35vh;
    animation: 0.5s linear 2s 1 normal forwards running div;
  }

  @keyframes div {
    0% {
      opacity: 1;
      height: 35vh;
    }
    100% {
      opacity: 0;
      height: 0vh;
    }
  }

  p {
    font-size: 3.125rem;

    animation: 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running
      subtitle;
    transform: translateY(70px);
  }
  @keyframes subtitle {
    0% {
      transform: translateY(110px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 390px) {
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
