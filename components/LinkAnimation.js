import styled from "styled-components";

export default function LinkAnimation({ children, href }) {
  return <AnimatedLink href={href}>{children}</AnimatedLink>;
}

const AnimatedLink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;

  ::before,
  ::after {
    content: "";
    position: absolute;
    left: -6px;
    right: -6px;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  ::before {
    top: 50%;
    transform-origin: right;
  }

  ::after {
    bottom: 50%;
    transform-origin: left;
  }

  :hover::before,
  :hover::after {
    transform: scaleX(1);
  }
`;
