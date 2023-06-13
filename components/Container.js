import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export default function SectionElement({ children, title, id, text }) {
  return (
    <Section id={id}>
      <Fade cascade>
        <Header>
          <Title>{title}</Title> <Text>{text}</Text>
        </Header>
        <Article>{children}</Article>
      </Fade>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  height: min-content;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-flow: column;
  place-content: center;
  padding: 6.25rem 1rem;

  @media (min-width: 768px) {
    padding: 8.875rem 6.25rem;
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
