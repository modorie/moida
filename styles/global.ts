import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.3;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
`

export default GlobalStyle
