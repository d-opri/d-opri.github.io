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
  font-family: 'Satoshi', sans-serif;
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


.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
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
