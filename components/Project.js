import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Project({ title, stack, image, link }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "0px 0px -50% 0px",
  });

  const containerClassName = `hidden ${inView ? "show" : ""}`;

  return (
    <ProjectContainer ref={ref} className={containerClassName}>
      {image.map((source, index) => {
        return (
          <StyledLink href={link} key={index}>
            <StyledImage
              key={index}
              height={454}
              width={600}
              alt={source.alt}
              src={source.img}
            />
          </StyledLink>
        );
      })}
      <header>
        <StyledLink href={link}>
          <h3>{title}</h3>
        </StyledLink>
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
      </header>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.article`
  display: flex;
  flex-flow: column;
  gap: 20px;

  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
  }

  header {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
  }

  li {
    font-size: 18px;
    line-height: 1.4em;
    opacity: 0.7;
  }

  @media screen and (max-width: 834px) {
    gap: 16px;
    justify-content: flex-start;

    header {
      gap: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  border-radius: 25px;
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
    font-size: 22px;
    line-height: 1.875em;
    font-weight: 550;
  }
`;
