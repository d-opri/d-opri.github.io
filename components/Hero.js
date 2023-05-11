import styled from "styled-components";
import { StyledHeading, StyledSubHeading } from "./Fonts";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 300px 284px;
  gap: 19px;
  position: relative;
`;

const Hero = () => {
  return (
    <Container>
      <StyledHeading> Dani Opri</StyledHeading>
      <StyledSubHeading> Front-end Developer and UX Designer</StyledSubHeading>
    </Container>
  );
};

export default Hero;
