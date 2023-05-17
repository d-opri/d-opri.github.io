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
  font-size: 1rem;
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
h1 {
  font-style: italic;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 3rem;
}
h2 {
  font-weight: 800;
  font-size: 3.5rem;
  letter-spacing: 0.105em;
  text-transform: uppercase;
  line-height: 4.8rem;
}
p {
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: -0.005em;
  font-weight: 300;
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
