import Layout from "../../components/Layout";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Satoshi";
  src: url("../../asset/Satoshi/Satoshi-Variable.ttf");
  src: url("../../asset/Satoshi/Satoshi-Variable.ttf");
  font-weight: 400;
  font-style: normal;
}

:root {
  font-family: Satoshi, sans-serif;
  font-size: 2rem;
}

html,
body {
  background-color: rgb(0, 0, 0);
  height: 100%;
  color: #fff;
  
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: line-through;
}

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
