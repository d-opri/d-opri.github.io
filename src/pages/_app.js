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


 a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;
}

a::before,
a::after {
  content: "";
  position: absolute;
  left: -6px; /* Adjust the value to extend the line */
  right: -6px; /* Adjust the value to extend the line */
  height: 1px;
  background-color: #fff;
      transform: scaleX(0);
    transition: transform 0.3s ease;
}

a::before {
  top: 50%;
  transform-origin: right;
}

a::after {
  bottom: 50%;
  transform-origin: left;
}

a:hover::before,
  a:hover::after {
    transform: scaleX(1);
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
