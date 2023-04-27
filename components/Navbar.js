import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  margin: auto;
`;

const StyledList = styled.ul`
  display: flex;
  alignt-items: center;
  gap: 2rem;
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
