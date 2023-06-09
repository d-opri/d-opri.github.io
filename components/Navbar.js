import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Image from "next/image";
import LinkAnimation from "./LinkAnimation";

export default function Navbar() {
  const [toggleMenue, setToggleMenue] = useState(false);
  const [width, setWidth] = useState(0);

  const toggleNav = () => {
    setToggleMenue(!toggleMenue);
  };

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledNav>
      <button type="button" onClick={toggleNav}>
        {!toggleMenue ? (
          <HamburgerMenue
            height={24}
            width={24}
            alt="Menue"
            src="/HamburgerMenue.svg"
          />
        ) : (
          <CloseMenue
            height={24}
            width={24}
            alt="Menue"
            src="/CloseMenue.svg"
          />
        )}
      </button>
      {(toggleMenue || width > 500) && (
        <ul>
          <LeftItem>
            <Link
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <LinkAnimation onClick={toggleNav}>Work</LinkAnimation>
            </Link>
          </LeftItem>
          <MiddleItem>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <LinkAnimation onClick={toggleNav}>About</LinkAnimation>
            </Link>
          </MiddleItem>

          <RightItem>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <LinkAnimation onClick={toggleNav}>Contact</LinkAnimation>
            </Link>
          </RightItem>
        </ul>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
align-items: center;
padding: 2.25rem 3.75rem;
position: fixed;
width: 100%;
height: 6.125rem;
z-index: 1000;
top: 0;

background: rgba(0, 0, 0, 0.5);
background-blend-mode: overlay;
backdrop-filter: blur(10px);    

   
  ul {
    display: flex;
    list-style: none;
    flex-direction: row;  
    justify-content: space-between;
  }

  button {
    display: none;
  position: relative;
  left: 17rem;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 100%;  
  }
  button:hover {
    text-decoration: line-through;
  }


  @media screen and (max-width: 500px) {
    height: auto;
justify-content: flex-end;
    ul {
      flex-flow: column;
      width: 100%;
      padding-block: 2rem;
      gap: 3rem;
      align-items: center;
    }
    button {
      display: block;
      }
    li {
      text-align: center;
    }
    }
  }
`;

const LeftItem = styled.li`
  width: 9.25rem;
  flex-basis: auto;
  // font-weight: 500;
  // font-size: 32px;
  line-height: 134.52%;
  /* identical to box height, or 43px */

  // letter-spacing: 0.04em;
  text-transform: uppercase;

  text-align: left;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const MiddleItem = styled(LeftItem)`
  text-align: center;
`;

const RightItem = styled(LeftItem)`
  text-align: right;
`;

const HamburgerMenue = styled(Image)``;
const CloseMenue = styled(Image)``;
