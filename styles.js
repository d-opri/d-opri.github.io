import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Satoshi";
  src: url("../../asset/Satoshi/Satoshi-Variable.ttf");
  src: url("../../asset/Satoshi/Satoshi-Variable.ttf");

}

:root {
 
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: Satoshi, sans-serif;
  
  display: flex;
  flex-direction: column;
}






`;
