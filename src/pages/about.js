import styled from "styled-components";
import { StyledBigTitle, StyledBodyText } from "../../components/Fonts";
import Head from "next/head";

const Container = styled.section`
  padding: min(1.3rem, 5rem);
  text-align: right:
max-width: 600px;
  outline: dashed white;
  @media screen and (max-width: 500px) {
    margin: 1rem;
  
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <StyledBigTitle>About</StyledBigTitle>
      <Container>
        <StyledBodyText>
          Front-end developer who cares deeply about User Experience. Serious
          passion for UI design and new technologies.
        </StyledBodyText>
      </Container>
    </>
  );
}
