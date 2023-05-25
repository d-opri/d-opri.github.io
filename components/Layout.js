import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <PageContainer>
      <Head>
        <title>Dani Opri</title>
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div``;

const Main = styled.main`
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18.5rem;

  @media screen and (max-width: 834px) {
    margin: 1rem;
  }

  @media screen and (min-width: 834px) {
    margin: 100px;
  }
`;
