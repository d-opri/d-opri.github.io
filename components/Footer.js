import styled from "styled-components";

const StyledFooter = styled.footer`
  bottom: 0;
  position: absolute;
  height: 2.5rem;
  width: 100%;
  outline: dashed white;
  padding: 0.5rem 1.5rem;
  p {
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Dani © 2023</p>
    </StyledFooter>
  );
}
