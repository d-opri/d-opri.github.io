import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 768px) {
    gap: 150px;
  }
`;
