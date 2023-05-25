import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Project({ title, stack, image }) {
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
          <StyledImage
            key={index}
            height={454}
            width={600}
            alt={source.alt}
            src={source.img}
          />
        );
      })}
      <header>
        <StyledLink href="/splitme">
          <h3>{title}</h3>
        </StyledLink>
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
      </header>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.article`
  display: flex;
  flex-flow: column;
  gap: 20px;

  :hover {
    opacity: 50%;
  }
  h3 {
    font-size: 22px;
    line-height: 134.52%;
    /* identical to box height, or 30px */
  }

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
    line-height: 134.52%;
    color: rgba(155, 155, 155, 1);
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
  height: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  h3 {
    font-size: 22px;
    line-height: 134.52%;
    /* identical to box height, or 30px */
  }
`;
