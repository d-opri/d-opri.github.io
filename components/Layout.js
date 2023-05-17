import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <PageContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div``;

const Main = styled.main`
  padding-bottom: 3rem;
`;
