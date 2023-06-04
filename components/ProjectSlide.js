import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import LinkAnimation from "./LinkAnimation";

export default function ProjectSlide({
  title,
  description,
  stack,
  image,
  link,
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  const containerClassName = `hidden ${inView ? "show" : ""}`;

  return (
    <ProjectContainer ref={ref} className={containerClassName}>
      <header>
        <StyledLink href={link}>
          <h3>{title}</h3>
        </StyledLink>

        <Body>
          <ul>
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
          </ul>

          <p>{description}</p>
          <LinkAnimation href={link}>
            {" "}
            <p>Visit Github Repo</p>{" "}
          </LinkAnimation>
        </Body>
      </header>
      {image.map((source, index) => {
        return (
          <ImageContainer key={index}>
            <StyledImage
              height={676}
              width={1367}
              alt={source.alt}
              src={source.img}
            />
          </ImageContainer>
        );
      })}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: min-content;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 50%;
    padding: 0px 0px 0px 36px;
  }

  ul {
    padding-top: 5%;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  li {
    font-size: 1.625rem;
    letter-spacing: -0.019rem;
    line-height: 1.4em;
    color: #b2b2b2;
  }

  p {
    padding-top: 2%;
    font-size: 30px;
    letter-spacing: -0.031rem;
    line-height: 1.6em;
    font-weight: 300;
  }

  @media screen and (max-width: 834px) {
    gap: 16px;
    justify-content: center;

    header {
      gap: 0;
      max-width: 100%;
      padding: 0;
    }
    p {
      font-size: 20px;
      font-weight: 300;
      letter-spacing: -0.3px;
      line-height: 1.6em;
      paragraph-spacing: 0px;
    }
    li {
      font-size: 18px;
      letter-spacing: -0.3px;
      line-height: 1.4em;
      paragraph-spacing: 0px;
    }
  }
`;

const ImageContainer = styled.figure`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 834px) {
    max-width: 100%;
    margin-top: 1rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
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
