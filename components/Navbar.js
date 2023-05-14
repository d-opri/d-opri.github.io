import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [toggleMenue, setToggleMenue] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenue(!toggleMenue);
  };
  return (
    <StyledNav>
      <StyledLink href="/">
        <h1>Dev</h1>
      </StyledLink>
      <button type="button" onClick={toggleNav}>
        X
      </button>
      {(toggleMenue || screenSize > 500) && (
        <ul>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </StyledNav>
  );
}

// const StyledNav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: sticky;
//   padding: 1rem 2rem;
//   backdrop-filter: blur(10px);
//   background-color: rgba(0, 0, 0, 0.7);
//   flex: 0 0 auto;
//   flex-flow: row nowrap;
//   left: 0px;
//   top: 0px;
//   width: 100%;
//   z-index: 1;
// `;

// const StyledList = styled.ul`
//   display: flex;
//   gap: 4rem;
//   list-style: none;
// `;

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
    flex-flow: column;
    gap: 2rem;

    ul {
      flex-flow: column;
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
