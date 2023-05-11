import styled from "styled-components";
import { StyledBigTitle, StyledBodyText } from "../../components/Fonts";

const Container = styled.section`
  position: absolute;
  width: 860px;
  height: 146px;
  right: 147px;
  top: 356px;
`;

export default function About() {
  return (
    <>
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
