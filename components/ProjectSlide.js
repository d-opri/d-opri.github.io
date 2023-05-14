import Image from "next/image";
import styled from "styled-components";

const ProjectSlide = ({ title, stack, description, alt, image }) => {
  return (
    <Container>
      <TextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledBody>
          <StyledTagGroup>
            {stack.map((tag, index) => {
              return (
                <StyledTag key={index}>
                  <p>
                    {index > 0 ? `*` : ""} {tag}
                  </p>
                </StyledTag>
              );
            })}
          </StyledTagGroup>

          <Description>{description} </Description>
        </StyledBody>
      </TextContainer>
      <ImageContainer>
        <StyledImage height={644} width={500} alt={alt} src={image} />
        <StyledImage height={644} width={500} alt={alt} src={image} />
      </ImageContainer>
    </Container>
  );
};

export default ProjectSlide;

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: min(1.3rem, 5rem);
  margin-inline: auto;
  max-width: 100%;
  gap: 2rem;
  outline: dashed white;
`;

const TextContainer = styled.section`
  gap: 3rem;
  display: flex;
  flex-flow: column wrap;
  outline: dashed white;
  width: min(100%, 800px);
`;

const StyledTitle = styled.h1`
  font-size: clamp(3rem, 10vw + 1rem, 5rem);
  letter-spacing: -4px;
  line-height: 1.2em;
`;

const StyledBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  outline: dashed white;
`;

const StyledTagGroup = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  list-style: none;
`;

const StyledTag = styled.li`
  color: rgba(155, 155, 155, 1);
  font-size: 0.9rem;
`;

const Description = styled.p`
  font-size: clamp(0.8rem, 5vw + 0.1rem, 1rem);
  line-height: 1.6em;
`;

const ImageContainer = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  outline: dashed white;
  width: min(100%, 1000px);
`;

const StyledImage = styled(Image)`
  width: 100%;
  outline: dashed white;
`;
