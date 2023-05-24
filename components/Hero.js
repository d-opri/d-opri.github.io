import styled from "styled-components";

export default function Hero() {
  return (
    <StyledHero>
      <span>
        <h1>
          {" "}
          Dani <br /> Opri
        </h1>
        <div></div>
      </span>
      <span>
        <p>Developer & Designer</p>
        <div></div>
      </span>
    </StyledHero>
  );
}

const StyledHero = styled.header`
  display: flex;
  flex-flow: column nowrap;
  gap: 55px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  h1 {
    font-weight: 500;
    font-size: 108px;
    line-height: 98px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

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
    font-weight: 500;
    font-size: 18px;
    line-height: 90.5%;
    /* or 16px */

    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

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
