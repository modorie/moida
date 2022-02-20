import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>moida</title>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
