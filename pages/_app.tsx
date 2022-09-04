import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '@/styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>moida</title>
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
