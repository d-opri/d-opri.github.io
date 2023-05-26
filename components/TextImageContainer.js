import styled from "styled-components";

import Image from "next/image";
import Header from "./Header";
import LinkSection from "./LinkSection";

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
      <TextContainer>
        <h4>Giving adlfkj sdnvl afcm;ljgg ent ash vskbcjh grgsds</h4>
        <p>
          fraction Our taefabckjeskzrn vanc.js was Refraction Our task was
          egfaiwluehcjeka/l Refraction Our task was Rd.wnekacn scezkdh ;lbhask
          was Refraction Our task
        </p>
      </TextContainer>
      <LinkSection />
    </Layout>
  );
}

const Layout = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 8.75rem;
  margin-top: 5rem;

  @media screen and (max-width: 834px) {
    gap: 60px;
    margin: 11rem 0.5rem 0;
  }
`;

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 80px;
  justify-content: space-between;
  align-items: flex-start;
  height: min-content;

  @media screen and (max-width: 390px) {
    gap: 2rem;
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

// const TextSection = styled.section`
//   display: flex;
//   flex-flow: row wrap;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 36px;

//   @media screen and (min-width: 538px) {
//     gap: 89px;
//     padding: 100px 100px 60px;
//   }

//   header {
//     font-size: 32px;
//     line-height: 33px;
//     letter-spacing: 0.005em;
//     flex: 1 0 0;
//   }

//   p {
//     font-size: 20px;
//     line-height: 166%;
//     /* or 33px */

//     letter-spacing: 0.065em;
//     flex-basis: 37.375rem;
//   }
// `;

// const BannerSection = styled.section`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 0px;
//   background: #323232;

//   width: 100%;
//   height: 603px;
//   //   margin: 0 !important;

//   p {
//     font-size: 26px;
//     line-height: 150%;
//     /* or 39px */

//     letter-spacing: 0.065em;
//   }

//   @media screen and (max-width: 390px) {
//     width: 100%;
//     height: 200px;
//   }
// `;
