import styled from "styled-components";

export default function LinkSection() {
  return (
    <Container>
      <Email>dani.opri@protonmail.com</Email>
      <Links>
        <a href="#">LinkedIn</a>
        <a href="#">Github</a>
        <a href="#">Behance</a>
        <a href="#">Xing</a>
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
  padding: 100px;
  width: 100%;

  @media screen and (max-width: 390px) {
    padding: 50px 0;
  }
`;

const Email = styled.p`
  font-size: 38px;
  letter-spacing: -1px;
  line-height: 1.4em;

  @media screen and (max-width: 390px) {
    font-size: 20px;
    letter-spacing: -0.3px;
  }
`;

const Links = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px 30px;
  flex-basis: 420px;

  a {
    font-size: 24px;
    letter-spacing: -0.3px;
    line-height: 1.4em;
  }

  @media screen and (max-width: 390px) {
    align-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    a {
      font-size: 20px;
    }
  }
`;
