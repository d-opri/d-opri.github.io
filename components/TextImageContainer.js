import styled from "styled-components";

import Image from "next/image";
import Header from "./Header";

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
          <h4>Details about Progress</h4>
          <p>
            Refraction Our taefabckjeskzrn vanc.js was Refraction Our task was
            egfaiwluehcjeka/l Refraction Our task was Rd.wnekacn scezkdh ;lbhask
            was Refraction Our task was{" "}
          </p>
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
      <TextSection>
        <header>Giving adlfkj sdnvl afcm;ljgg ent ash vskbcjh grgsds</header>
        <p>
          fraction Our taefabckjeskzrn vanc.js was Refraction Our task was
          egfaiwluehcjeka/l Refraction Our task was Rd.wnekacn scezkdh ;lbhask
          was Refraction Our task
        </p>
      </TextSection>
      <BannerSection>
        Refraction Our task was Our task wasOur task wasOur task wasOur task was
        Our task wasOur task wasOur task wasOurask was Our task wasOur task
        wasOur task was
      </BannerSection>
    </Layout>
  );
}

const Layout = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  @media screen and (max-width: 834px) {
    gap: 30px;
    margin: 1rem;
  }
`;

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 3.75rem;
  justify-content: space-between;
  align-items: flex-start;
  height: min-content;
  outline: dashed white;

  @media screen and (max-width: 390px) {
    gap: 18px;
  }
`;

const TextContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.313rem;
  flex: 1 0 0;

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
    letter-spacing: 0.065em;
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
  outline: dashed white;
  gap: 20px;
`;

const TextSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 36px;

  @media screen and (min-width: 538px) {
    gap: 89px;
    padding: 100px 100px 60px;
  }

  header {
    font-size: 32px;
    line-height: 33px;
    letter-spacing: 0.005em;
    flex: 1 0 0;
  }

  p {
    font-size: 20px;
    line-height: 166%;
    /* or 33px */

    letter-spacing: 0.065em;
    flex-basis: 37.375rem;
  }
`;

const BannerSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background: #323232;

  width: 100%;
  height: 603px;
  //   margin: 0 !important;

  p {
    font-size: 26px;
    line-height: 150%;
    /* or 39px */

    letter-spacing: 0.065em;
  }

  @media screen and (max-width: 390px) {
    width: 100%;
    height: 200px;
  }
`;
