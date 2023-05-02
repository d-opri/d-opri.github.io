import styled from "styled-components";

const Container = styled.main`
  position: relative;
  margin-left: 15%;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Section = styled.section`
  margin-right: 10%;
  transform: translateY(30%);
`;
const Content = styled.article`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

export default function About() {
  return (
    <>
      <Container>
        <Section>
          <Title>Moin Moin</Title>
          <Content>Here talking about self bla bla bla</Content>
        </Section>
        <Section>
          <Title>Skills</Title>
          <Content>
            <br />
            React
            <br />
            Node JS
            <br />
            Design system
            <br />
            Wireframing & Prototyping
            <br />
            Figma
            <br />
          </Content>
        </Section>
      </Container>
    </>
  );
}
