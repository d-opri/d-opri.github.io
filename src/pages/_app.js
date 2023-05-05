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
  font-weight: 400;
}

html,
body {
  padding: 0;
  margin: 0;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
}

a {
  color: #fff;

  text-decoration: none;
}

a:hover {
  text-decoration: line-through;
}

img {
  max-width: 100%;
  display: block;
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
