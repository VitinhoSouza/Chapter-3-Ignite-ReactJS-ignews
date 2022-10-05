import {AppProps} from 'next/app';
import Head from 'next/head';
import { Header } from '../components/Header';
import {SessionProvider} from "next-auth/react"

import '../styles/global.scss';

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>ig.news</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </SessionProvider>
    
  )
}

export default MyApp
