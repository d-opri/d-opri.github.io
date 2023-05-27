import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export default function SectionElement({ children, title, id, text }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  const containerClassName = `hidden ${inView ? "show" : ""}`;

  return (
    <Section ref={ref} id={id} className={containerClassName}>
      <Header>
        <Title>{title}</Title> <Text>{text}</Text>
      </Header>
      <Article>{children}</Article>
    </Section>
  );
}

const Section = styled.section`
  height: min-content;
  width: 100%;
  scroll-snap-align: start;

  display: flex;
  flex-flow: column;
  place-content: flex-start;

  padding: 100px 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  place-content: flex-start;
  align-items: flex-start;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2em;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Text = styled.p`
  opacity: 0.7;
  font-size: 22px;
  line-height: 1.8em;

  word-break: break-word;
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Article = styled.article`
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

// const StyledTitle = styled.h1`
//   font-style: normal;
//   font-weight: 500;
//   font-size: 3.125rem;
//   line-height: 51px;
//   letter-spacing: 0.07em;
//   text-transform: uppercase;

//   @media screen and (min-width: 1200px) {
//     font-weight: 500;
//     // font-size: 4.688rem;
//     font-size: 12.5rem;
//     line-height: 12.875rem;
//     letter-spacing: 0.105em;
//     transform: translateX(50.2466%);
//   }
// `;
