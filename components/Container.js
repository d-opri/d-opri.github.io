import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export default function HiddenElement({ children, title, id }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  const containerClassName = `hidden ${inView ? "show" : ""}`;

  return (
    <StyledContainer ref={ref} id={id} className={containerClassName}>
      <span>
        <h1>{title}</h1>{" "}
      </span>
      <div>{children}</div>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  gap: 5rem;
  min-height: 100vh;
  scroll-snap-align: start;
  margin-bottom: 4rem;

  h1 {
    font-weight: 800;
    font-size: 5rem;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    line-height: 4.8rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
    letter-spacing: -0.005em;
    font-weight: 300;
  }

  span {
    text-align: left;
    position: relative;
    top: -3rem;
    transition-delay: 200ms;
  }
  div {
    margin: 2.25rem;
    transition-delay: 500ms;
  }

  @media screen and (min-width: 834px) {
    min-height: 125vh;

    div {
      text-align: right;
      padding: 0 6.25rem;
    }
  }
`;
