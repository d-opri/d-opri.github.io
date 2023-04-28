import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledP = styled.p`
  text-align: right;
  padding: 1.875rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledP>Dani © 2023</StyledP>
    </StyledFooter>
  );
}
