import styled from "styled-components";
import Image from "next/image";
import Header from "./Header";
import LinkSection from "../Links";

export default function TextImageContainer() {
  return (
    <Layout>
      <Header />
      <StyledBigImage
        height={651}
        width={1242}
        src="/webmockup.svg"
        alt="mockup"
      />
      <Container>
        <TextContainer>
          <h4>Design Process</h4>
          <p>After a short research phase </p>
        </TextContainer>
        <StyledImage
          height={723}
          width={575}
          src="/mobilemockup.svg"
          alt="mockup"
        />{" "}
      </Container>
      <ImageContainer>
        <StyledBigImage
          height={651}
          width={1242}
          src="/webmockup.svg"
          alt="mockup"
        />
        <StyledBigImage
          height={651}
          width={1242}
          src="/webmockup.svg"
          alt="mockup"
        />
        <StyledBigImage
          height={651}
          width={1242}
          src="/webmockup.svg"
          alt="mockup"
        />
      </ImageContainer>
      <TextContainer>
        <h4>App Development</h4>
        <p>Bein</p>
      </TextContainer>
      <LinkSection />
    </Layout>
  );
}

const Layout = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem;
  gap: 60px;

  @media (min-width: 768px) {
    padding: 100px;
    gap: 8.75rem;
  }
`;

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: min-content;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 80px;
  }
`;

const TextContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.313rem;
  flex: 1 0 0;

  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;

  h4 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.438rem;
    letter-spacing: 0.005em;
  }

  p {
    font-size: 1.625rem;
    line-height: 150%;
    opacity: 0.7;
    font-weight: 300;
    letter-spacing: 0.065em;
    font-weight: 300;
  }

  @media screen and (max-width: 390px) {
    h4 {
      font-size: 32px;
      letter-spacing: -1px;
      text-transform: none;
      text-decoration: none;
      line-height: 1.4em;
    }
  }
`;

const StyledBigImage = styled(Image)`
  border-radius: 25px;
  width: 100%;
  height: auto;
`;

const StyledImage = styled(Image)`
  border-radius: 25px;
  width: 100%;
  height: auto;
  flex-basis: 37.375rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 40px;
`;
