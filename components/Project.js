import Image from "next/image";

import styled from "styled-components";
import { StyledTitle, StyledSubtitle, StyledCaption } from "./Fonts";

const Project = ({ title, stack, description, alt, image, link }) => {
  return (
    <ProjectSlide>
      <ProjectContainer>
        <TextContainer>
          <StyledTitle> {title}</StyledTitle>

          <SubTextContainer>
            <StyledSubtitle>{stack}</StyledSubtitle>

            <StyledCaption>{description}</StyledCaption>
          </SubTextContainer>
        </TextContainer>

        <ImageContainer>
          <Image height={729} width={676} alt={alt} src={image} />
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
  align-items: flex-start;
  padding: 0px;
  gap: 45px;

  position: absolute;
  width: 584px;
  height: 268px;
  left: 71px;
  top: 191px;
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

  left: 720px;
  top: 44px;
`;
