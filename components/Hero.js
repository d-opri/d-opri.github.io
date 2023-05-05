import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 50px 100px;
  font-size: 2rem;
`;

const StyledCaption = styled.p`
  color: #000;
  line-height: -1rem;
  letter-spacing: 0.3px;
`;

const Hero = () => {
  return (
    <StyledHeader>
      <h1> bitches</h1>
      <StyledCaption>
        Here an introduction yadda yadda
        <br /> Then some more yadda yadda{" "}
      </StyledCaption>
    </StyledHeader>
  );
};

export default Hero;
