import Link from "next/link";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 100px 20px;
`;
const StyledLink = styled(Link)`
  color: red;
`;

const contact = () => {
  return (
    <StyledSection>
      <StyledLink href="/contact">Github</StyledLink>
      <StyledLink href="/contact">Behance</StyledLink>
      <StyledLink href="/contact">Xing</StyledLink>
      <StyledLink href="/contact">Email</StyledLink>
    </StyledSection>
  );
};

export default contact;
