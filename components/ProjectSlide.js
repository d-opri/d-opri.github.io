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
                    {index > 0 ? ` * ` : ""} {tag}
                  </p>
                </StyledTag>
              );
            })}
          </StyledTagGroup>

          <p>{description} </p>
        </StyledBody>
      </TextContainer>
      <ImageContainer>
        <StyledImage height={612} width={300} alt={alt} src={image} />
      </ImageContainer>
    </Container>
  );
};

export default ProjectSlide;

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 1rem;
`;

const TextContainer = styled.section`
  gap: 2.7rem;
  display: flex;
  flex-flow: column wrap;

  flex-basis: 500px;
  flex-grow: 9999;
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  font-style: normal;
  font-size: 3.5rem;
  line-height: 4rem;
  letter-spacing: 0.005em;
`;

const StyledBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

const StyledTagGroup = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const StyledTag = styled.li`
  color: rgba(155, 155, 155, 1);
`;

const ImageContainer = styled.figure`
  display: flex;
  flex-flow: column nowrap;

  flex-basis: 300px;
  flex-grow: 1;
`;

const StyledImage = styled(Image)`
  width: 100%;
`;
