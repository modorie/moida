import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Neo Bold'),
    url("/fonts/SpoqaHanSansNeoBold.woff2") format("woff2");
  } 

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: local('Spoqa Han Sans Neo Medium'),
    url("/fonts/SpoqaHanSansNeoMedium.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Neo Regular'),
    url("/fonts/SpoqaHanSansNeoRegular.woff2") format("woff2");
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: local('Spoqa Han Sans Neo Light'),
    url("/fonts/SpoqaHanSansNeoLight.woff2") format("woff2");
  }

  @font-face {
    font-family: emoji;
    src: local('Apple Color Emoji'),
        url('/fonts/AppleColorEmoji.ttf') format('truetype');
    unicode-range: U+0080-02AF, U+0300-03FF, U+0600-06FF, U+0C00-0C7F, U+1DC0-1DFF, U+1E00-1EFF, U+2000-209F, U+20D0-214F, U+2190-23FF, U+2460-25FF, U+2600-27EF, U+2900-29FF, U+2B00-2BFF, U+2C60-2C7F, U+2E00-2E7F, U+3000-303F, U+A490-A4CF, U+E000-F8FF, U+FE00-FE0F, U+FE30-FE4F, U+1F000-1F02F, U+1F0A0-1F0FF, U+1F100-1F64F, U+1F680-1F6FF, U+1F910-1F96B, U+1F980-1F9E0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
`;

export default GlobalStyle;
