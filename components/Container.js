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
  padding: 6.25rem 1rem;

  @media (min-width: 768px) {
    padding: 8.875rem 6.25rem;
    height: min-content;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  place-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    place-content: center space-between;
  }
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.2em;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 5.75rem;
    line-height: 134.52%;
    /* identical to box height, or 124px */
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  opacity: 0.7;
  line-height: 1.8em;
  word-break: break-word;
  overflow-wrap: break-word;
  font-weight: 300;

  @media (min-width: 768px) {
    flex-basis: 654px;
    font-size: 2rem;
    line-height: 132.52%;
  }
`;

const Article = styled.article`
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  justify-content: flex-end;

  @media (min-width: 768px) {
  }
`;
