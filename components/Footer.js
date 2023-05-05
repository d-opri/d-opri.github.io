import styled from "styled-components";

const StyledFooter = styled.footer`
  bottom: 0;
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
