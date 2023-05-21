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
      </TextContainer>
      <ImageContainer>
        {image.map((source, index) => {
          return (
            <Image
              key={index}
              height={612}
              width={300}
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
  flex-wrap: wrap;
  align-items: start;
  gap: 1rem;
`;

const TextContainer = styled.section`
  flex-basis: 450px;
  flex-grow: 9999;
  display: flex;
  flex-flow: column wrap;
  text-align: left;

  h1 {
    font-weight: 800;
    font-size: 3.5rem;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    line-height: 6rem;
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
`;

const ImageContainer = styled.figure`
  flex-basis: 300px;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  align-items: center;
`;
