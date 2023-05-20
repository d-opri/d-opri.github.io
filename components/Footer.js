import styled from "styled-components";

const StyledFooter = styled.footer`
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 1.5rem;
  text-align: right;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Dani © 2023</p>
    </StyledFooter>
  );
}
