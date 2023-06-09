import styled from "styled-components";
import LinkAnimation from "./LinkAnimation";

export default function LinkSection() {
  return (
    <Container>
      <Box>
        <LinkAnimation href="dani.opri@protonmail.com">
          dani.opri@protonmail.com
        </LinkAnimation>
      </Box>
      <Wrapper>
        <Box>
          <LinkAnimation href="https://www.behance.net/gallery/166288329/Pluto-Pay-Case-Study/modules/937770879">
            Behance
          </LinkAnimation>
        </Box>
        <BoxRight>
          <LinkAnimation href="#">LinkedIn</LinkAnimation>
        </BoxRight>
        <Box>
          <LinkAnimation href="https://github.com/d-opri/">
            Github{" "}
          </LinkAnimation>
        </Box>
        <BoxRight>
          <LinkAnimation href="https://www.xing.com/profile/Daniela_Opri/cv">
            Xing
          </LinkAnimation>
        </BoxRight>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  place-content: flex-start;
  line-height: 1.4em;
  font-size: 1.25rem;
  letter-spacing: -0.3px;

  @media screen and (min-width: 768px) {
    place-content: space-between;
    font-size: 2.375rem;
    letter-spacing: -1px;
    padding: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-basis: 40%;
  margin-top: 1rem;
  font-weight: 300;

  a {
    font-size: 1.25rem;
    letter-spacing: -0.3px;
    line-height: 1.4em;
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 1.5rem;
    }
  }
`;

const Box = styled.div`
  flex-basis: 50%;
  margin-bottom: 1rem;
`;

const BoxRight = styled(Box)`
  @media screen and (min-width: 768px) {
    text-align: right;
  }
`;
