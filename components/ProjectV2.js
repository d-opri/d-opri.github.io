import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import LinkAnimation from "./LinkAnimation";

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
        {images.map((image, index) => {
          return (
            <Box key={index}>
              <Box2>
                <Box3>
                  <StyledImage
                    height={846}
                    width={1704}
                    alt={image.alt}
                    src={image.src}
                  />
                </Box3>
              </Box2>
            </Box>
          );
        })}
      </ImageContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.article`
  place-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 60px;
  height: min-content;
  max-width: 1440px;
  overflow: visible;
  padding: 100px 100px 60px;
  position: relative;
  width: 100%;
`;

const TextContainer = styled.header`
  place-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-flow: column nowrap;

  height: min-content;

  overflow: visible;

  position: sticky;

  will-change: transform;
  z-index: 1;

  p {
    padding-top: 2%;
    font-size: 30px;
    letter-spacing: -0.031rem;
    line-height: 1.6em;
    font-weight: 300;
  }

  @media screen and (max-width: 834px) {
    position: static;
    gap: 0;
    max-width: 100%;
    padding: 0;

    p {
      font-size: 20px;
      font-weight: 300;
      letter-spacing: -0.3px;
      line-height: 1.6em;
      paragraph-spacing: 0px;
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
    font-size: 1.625rem;
    letter-spacing: -0.019rem;
    line-height: 1.4em;
    color: #b2b2b2;
  }

  @media screen and (max-width: 834px) {
    li {
      font-size: 18px;
      letter-spacing: -0.3px;
      line-height: 1.4em;
      paragraph-spacing: 0px;
    }
  }
`;

const ImageContainer = styled.div`
  place-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-flow: column nowrap;
  gap: 30px;
  height: min-content;
  max-width: 1440px;
  overflow: visible;
  padding: 0px 0px 100px;
  position: relative;
  width: 1px;

  @media screen and (max-width: 834px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const Box = styled.div`
  place-content: center flex-start;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 30px;
  height: min-content;
  overflow: visible;
  padding: 0px;
  position: relative;
  width: 100%;
`;

const Box2 = styled.div`

opacity: 1;
transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
}

  aspect-ratio: 0.7125 / 1;
  border-radius: 8px;
  flex: 1 0 0px;
  height: var(--framer-aspect-ratio-supported, 281px);
  overflow: hidden;
  position: relative;
  width: 1px;
  will-change: transform;


`;

const Box3 = styled.div`
  position: absolute;
  pointer-events: none;
  user-select: none;
  border-radius: inherit;
  inset: 0px;
`;
const StyledImage = styled(Image)`
  pointer-events: none;
  user-select: none;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;

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
    /* identical to box height */
  }

  @media screen and (max-width: 834px) {
    h3 {
      font-weight: 500;
      font-size: 2.2rem;
      line-height: 34px;
      /* identical to box height */

      letter-spacing: -0.035em;
    }
  }
`;

const Body = styled.article`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  opacity: 0.8;
`;
