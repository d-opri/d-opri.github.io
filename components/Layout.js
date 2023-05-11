import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import Hero from "./Hero";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
