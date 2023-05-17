import Link from "next/link";
import styled from "styled-components";
import ContactForm from "../../components/ContactForm";
import { StyledBigTitle } from "../../components/Fonts";
import Head from "next/head";

const StyledLink = styled(Link)`
  color: red;
`;

const Contact = () => {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <StyledBigTitle>Contact</StyledBigTitle>
      {/* <StyledLink href="/">dani.opri@protonmail.com </StyledLink>
      <StyledLink href="/">Github</StyledLink>
      <StyledLink href="/">Behance</StyledLink>
      <StyledLink href="/">Xing</StyledLink> */}
      <ContactForm />
    </>
  );
};

export default Contact;
