import styled from "styled-components";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Project({ title, stack, description, image }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  const containerClassName = `hidden ${inView ? "show" : ""}`;

  return (
    <ProjectContainer ref={ref} className={containerClassName}>
      <TextContainer>
        <h1>{title}</h1>
        <div>
          <ul>
            {stack.map((tag, index) => {
              return (
                <li key={index}>
                  <p>
                    {index > 0 ? ` * ` : ""} {tag}
                  </p>
                </li>
              );
            })}
          </ul>
          <p>{description} </p>
        </div>
      </TextContainer>
      <ImageContainer>
        {image.map((source, index) => {
          return (
            <StyledImage
              key={index}
              height={323}
              width={350}
              alt={source.alt}
              src={source.img}
            />
          );
        })}
      </ImageContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 834px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.75rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 0.75rem;
  }
  h1 {
    font-weight: 500;
    font-size: 1.563rem;
    line-height: 26px;
    letter-spacing: -0.035em;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.045em;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0.5rem 0 1rem 0;
  }
  li {
    color: rgba(155, 155, 155, 1);
  }

  @media screen and (min-width: 834px) {
    width: 31.563rem;
    height: 34.375rem;

    h1 {
      font-weight: 500;
      font-size: 4.688rem;
      line-height: 91px;
      letter-spacing: 0.005em;
      text-align: left;
    }

    p {
      font-size: 1.75rem;
      line-height: 38px;
      letter-spacing: 0.01em;
      text-align: left;
    }
  }
`;

const ImageContainer = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.875rem;
  align-items: center;
`;
const StyledImage = styled(Image)`
  @media screen and (min-width: 834px) {
    width: 37.75rem;
    height: 34.375rem;
`;
