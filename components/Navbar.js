import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Image from "next/image";

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

  return (
    <StyledNav>
      <StyledLink href="/">
        <h1>Dev</h1>
      </StyledLink>
      <StyledImage height={45} width={24} alt="Logo" src="Logo.svg" />
      <button type="button" onClick={toggleNav}>
        <Image height={24} width={24} alt="Menue" src="/HamburgerMenue.svg" />
      </button>
      {(toggleMenue || width > 500) && (
        <ul>
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    width: 100%;
    z-index: 1;
  ul {
    display: flex;
    gap: 4rem;
    list-style: none;
    cursor: pointer;
    
  }
  button {
    display: none;
 align-self: flex-end;
   
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
    flex-flow: row wrap;
    gap: 2rem;

    ul {
      flex-flow: column;
      width: 100%;
      padding-block: 2rem;
      gap: 3rem;
      align-items: center;
    }
    li:hover {
      color: green;
    }
    button {
      display: block;
     
      }
    }
  }
`;

const StyledLink = styled(Link)`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledImage = styled(Image)`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
