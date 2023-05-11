import styled from "styled-components";

const StyledFooter = styled.footer`
  bottom: 0;
  position: fixed;
  right: 1.8rem;
`;

const StyledP = styled.p`
  text-align: right;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledP>Dani © 2023</StyledP>
    </StyledFooter>
  );
}
