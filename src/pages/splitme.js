import styled from "styled-components";

export default function SplitMe() {
  return (
    <Container>
      <Header>
        <h1>Split Me</h1>
      </Header>
      <Body>
        <TechStack>
          <li>Tag</li>
          <li>+</li>
          <li>Tag</li>
          <li>+</li>
          <li>Tag</li>
        </TechStack>
        <Description>
          <p>
            Description of product, what was my task. What problem did i solve
            Description of what was my task. What problem did i solve
            Description of product, what was my task. What problem did i solve
            Description of product, what was my tasklem did i solve
          </p>
        </Description>
      </Body>
    </Container>
  );
}

const Container = styled.section`
  justify-content: space-between;
  display: flex;
  flex-flow: row wrap;
  height: min-content;
  margin-top: 7rem;
  outline: dashed white;
  align-items: center;
`;

const Header = styled.header`
  flex: 1 0 0;
  outline: dashed white;
  h1 {
    font-size: 7.188rem;
    letter-spacing: -0.25rem;
    line-height: 1.2em;
  }
`;

const Body = styled.article`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.375rem;
  flex-basis: 37.375rem;
  opacity: 0.8;
`;

const TechStack = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  width: 100%;

  li {
    font-size: 1.375rem;
    letter-spacing: -0.019rem;
    line-height: 1.4em;
    color: #b2b2b2;
  }
`;

const Description = styled.div`
  p {
    font-size: 1.625rem;
    letter-spacing: -0.031rem;
    line-height: 1.6em;
    color: #ffffff;
  }
`;
