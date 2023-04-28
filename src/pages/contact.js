import Link from "next/link";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 100px 20px;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 6.25rem 1.25rem;
`;
const StyledLink = styled(Link)`
  color: red;
`;

const Contact = () => {
  return (
    <StyledSection>
      <StyledLink href="/">dani.opri@protonmail.com </StyledLink>
      <StyledLink href="/">Github</StyledLink>
      <StyledLink href="/">Behance</StyledLink>
      <StyledLink href="/">Xing</StyledLink>
    </StyledSection>
  );
};

export default Contact;
