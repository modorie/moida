import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";

import GlobalStyle from "@/styles/global";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>moida</title>
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
