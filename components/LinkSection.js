import styled from "styled-components";
import LinkAnimation from "./newComponents/LinkAnimation";

export default function LinkSection() {
  return (
    <Container>
      <Email>
        <LinkAnimation>dani.opri@protonmail.com</LinkAnimation>
      </Email>

      <Links>
        <LinkAnimation href="#">LinkedIn</LinkAnimation>
        <LinkAnimation href="#">Github</LinkAnimation>
      </Links>
      <Links>
        <LinkAnimation href="#">Behance</LinkAnimation>
        <LinkAnimation href="#">Xing</LinkAnimation>
      </Links>
    </Container>
  );
}

const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 30px;
  width: 100%;
  outline: dashed white;
  padding: 50px 0;

  @media screen and (min-width: 768px) {
    padding: 100px;
  }
`;

const Email = styled.div`
  line-height: 1.4em;
  font-size: 20px;
  letter-spacing: -0.3px;
  outline: dashed white;

  @media screen and (min-width: 768px) {
    font-size: 38px;
    letter-spacing: -1px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 10px 30px;
  flex-basis: 420px;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  outline: dashed white;

  a {
    font-size: 20px;
    letter-spacing: -0.3px;
    line-height: 1.4em;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: column;
    a {
      font-size: 24px;
    }
  }
`;
