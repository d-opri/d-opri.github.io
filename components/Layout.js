import styled from "styled-components";
import Navbar from "./Navbar";
import Head from "next/head";
import LinkAnimation from "./LinkAnimation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        <LinkAnimation href="/impressum">Impressum</LinkAnimation>
        <p>Dani © 2023</p>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
`;

const Footer = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  width: 100%;
  padding: 0 1.25rem;
  text-align: right;
`;
