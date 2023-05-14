import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.7);
  flex: 0 0 auto;
  flex-flow: row nowrap;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 4rem;
  list-style: none;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <h1>Dev</h1>
      </Link>

      <StyledList>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
