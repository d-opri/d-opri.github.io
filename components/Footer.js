import styled from "styled-components";

const StyledFooter = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 71px;
  width: 100%;
  padding: 0px 20px;
  text-align: right;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>d</p>
      <p>Dani © 2023</p>
    </StyledFooter>
  );
}
