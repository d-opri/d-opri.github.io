import Image from "next/image";

import styled from "styled-components";
import {
  StyledTitle,
  StyledSubtitle,
  StyledCaption,
  StyledSubHeading,
} from "./Fonts";

const Project = ({ title, stack, description, alt, image, link }) => {
  return (
    <ProjectSlide>
      <ProjectContainer>
        <TextContainer>
          <NumberContainer>
            <StyledSubHeading>01</StyledSubHeading>
          </NumberContainer>
          <StyledTextContainer>
            <Title>
              <StyledTitle> {title}</StyledTitle>
            </Title>

            <SubTextContainer>
              <StyledSubtitle>{stack}</StyledSubtitle>

              <StyledCaption>{description}</StyledCaption>
            </SubTextContainer>
          </StyledTextContainer>
        </TextContainer>

        <ImageContainer>
          <FirstImage height={644} width={316} alt={alt} src={image} />
          <SecondImage height={579} width={284} alt={alt} src={image} />
        </ImageContainer>
      </ProjectContainer>
    </ProjectSlide>
  );
};

export default Project;

const ProjectSlide = styled.article`
  position: relative;
  width: 1440px;
  height: 815px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 65px;

  position: absolute;
  width: 1440px;
  height: 815px;
  left: 71px;
  top: 44px;
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 1px;

  position: absolute;
  width: 621px;
  height: 738px;
  left: 34px;
  top: 35px;
`;

const NumberContainer = styled.div`
  width: 36px;
  height: 40px;

  /* Number */

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 134.52%;
  /* or 40px */

  letter-spacing: 0.01em;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledTextContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 36px;
  gap: 45px;

  width: 621px;
  height: 268px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Title = styled.div`
  width: 307px;
  height: 91px;

  /* Title */

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 91px;
  /* identical to box height */

  letter-spacing: 0.005em;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 584px;
  height: 132px;
`;

const ImageContainer = styled.figure`
  position: absolute;
  width: 676px;
  height: 729px;
  left: 720px;
  top: 44px;
`;

const FirstImage = styled(Image)`
  position: absolute;

  left: 0px;
  top: 0px;
`;

const SecondImage = styled(Image)`
  position: absolute;

  left: 392px;
  top: 150px;
`;
