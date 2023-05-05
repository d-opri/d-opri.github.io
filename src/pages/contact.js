import Link from "next/link";
import styled from "styled-components";
import ContactForm from "../../components/ContactForm";

const StyledLink = styled(Link)`
  color: red;
`;

const Contact = () => {
  return (
    <>
      {/* <StyledLink href="/">dani.opri@protonmail.com </StyledLink>
      <StyledLink href="/">Github</StyledLink>
      <StyledLink href="/">Behance</StyledLink>
      <StyledLink href="/">Xing</StyledLink> */}
      <ContactForm />
    </>
  );
};

export default Contact;
