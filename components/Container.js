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
        <StyledTitle>{title}</StyledTitle>{" "}
      </span>
      <div>{children}</div>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  // gap: 3.8rem;
  scroll-snap-align: start;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;

  span {
    transition-delay: 200ms;
  }
  div {
    transition-delay: 500ms;
    z-index: 9;
  }

  @media screen and (min-width: 1200px) {
    min-height: 125vh;
    // width: 83.813rem;

    div {
      // text-align: right;
      // padding: 0 6.25rem;
      // align-self: flex-end;
    }
    p {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.005em;
    }
  }
`;

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 3.125rem;
  line-height: 51px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    font-weight: 500;
    // font-size: 4.688rem;
    font-size: 12.5rem;
    line-height: 12.875rem;
    letter-spacing: 0.105em;
    transform: translateX(50.2466%);
  }
`;
