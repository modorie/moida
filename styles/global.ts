import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
`;

export default GlobalStyle;
