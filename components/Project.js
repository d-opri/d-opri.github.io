import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LinkAnimation from "./LinkAnimation";
import { Fade } from "react-awesome-reveal";

export default function ProjectSlide({
  title,
  description,
  stack,
  images,
  link,
}) {
  return (
    <ProjectContainer>
      <TextContainer>
        <StyledLink href={link}>
          <h3>{title}</h3>
        </StyledLink>
        <Body>
          <TechStack>
            {stack.map((tag, index, arr) =>
              index === arr.length - 1 ? (
                <li key={index}>{tag}</li>
              ) : (
                <li key={index}>
                  {tag}
                  &nbsp; • &nbsp;
                </li>
              )
            )}
          </TechStack>
          <p>{description}</p>
          <LinkAnimation href={link}>
            {" "}
            <p>Visit Github Repo</p>{" "}
          </LinkAnimation>
        </Body>
      </TextContainer>
      <ImageContainer>
        <Fade duration={1500}>
          {images.map((image, index) => {
            return (
              <StyledImage
                key={index}
                height={846}
                width={1704}
                alt={image.alt}
                src={image.src}
              />
            );
          })}
        </Fade>
      </ImageContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: min-content;
  // width: 100%;
`;

const TextContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 0 2.25rem;
  position: -webkit-sticky;
  position: sticky;
  top: 40%;
  max-width: 50%;

  p {
    word-break: break-word;
    overflow-wrap: break-word;
    font-weight: 300;
    font-size: 2rem;
    line-height: 132.52%;
  }

  @media screen and (max-width: 834px) {
    position: static;
    gap: 0;
    max-width: 100%;
    padding: 0;

    p {
      line-height: 1.8em;
      font-size: 1.3rem;
    }
  }
`;

const TechStack = styled.ul`
  padding-top: 5%;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  li {
    font-size: 1.5rem;
    line-height: 132.52%;
    font-weight: 500;
    letter-spacing: -0.019rem;
    opacity: 0.7;
  }

  @media screen and (max-width: 834px) {
    li {
      font-size: 1rem;
      letter-spacing: -0.3px;
      line-height: 1.4em;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 25%;
  height: min-content;
  overflow: visible;

  @media screen and (max-width: 834px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;

  :hover {
    opacity: 0.7;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: none;

  h3 {
    font-weight: 500;
    font-size: 5.625rem;
    letter-spacing: 0.005em;
    line-height: 91px;
  }

  @media screen and (max-width: 834px) {
    h3 {
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 34px;
      letter-spacing: -0.035em;
    }
  }
`;

const Body = styled.article`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;
