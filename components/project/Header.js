import styled from "styled-components";

export default function Header({ title, stack, description }) {
  return (
    <Container>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Body>
        <TechStack>
          {stack.map((tag, index, arr) =>
            index === arr.length - 1 ? (
              <li key={index}>{tag}</li>
            ) : (
              <li key={index}>
                {tag}
                &nbsp; • &nbsp;
              </li>
            )
          )}
        </TechStack>
        <Description>
          <p>{description}</p>
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
  align-items: flex-start;
`;

const Title = styled.header`
  flex: 1 0 0;

  h1 {
    font-size: 7.188rem;
    letter-spacing: -0.25rem;
    line-height: 1.2em;
    font-weight: 400;
  }

  @media screen and (max-width: 390px) {
    margin-bottom: 4.25rem;

    h1 {
      font-size: 60px;
      font-weight: 400;
      letter-spacing: -2px;
      line-height: 1.2em;
      paragraph-spacing: 0px;
    }
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
    font-size: 1.625rem;
    letter-spacing: -0.019rem;
    line-height: 1.4em;
    color: #b2b2b2;
  }

  @media screen and (max-width: 390px) {
    li {
      font-size: 18px;
      letter-spacing: -0.3px;
      line-height: 1.4em;
      paragraph-spacing: 0px;
    }
  }
`;

const Description = styled.div`
  p {
    font-size: 1.625rem;
    letter-spacing: -0.031rem;
    line-height: 1.6em;
    font-weight: 300;
  }

  @media screen and (max-width: 390px) {
    p {
      font-size: 20px;
      font-weight: 300;
      letter-spacing: -0.3px;
      line-height: 1.6em;
      paragraph-spacing: 0px;
    }
  }
`;
