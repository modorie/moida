import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

import {
  SpoqaHanSansNeoBold,
  SpoqaHanSansNeoMedium,
  SpoqaHanSansNeoRegular,
  SpoqaHanSansNeoLight,
} from "@/public/fonts";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Neo Bold'),
    url(${SpoqaHanSansNeoBold}) format('woff2'),
  } 

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: local('Spoqa Han Sans Neo Medium'),
    url(${SpoqaHanSansNeoMedium}) format('woff2'),
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Neo Regular'),
    url(${SpoqaHanSansNeoRegular}) format('woff2'),
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: local('Spoqa Han Sans Neo Light'),
    url(${SpoqaHanSansNeoLight}) format('woff2'),
  }

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
`;

export default GlobalStyle;
