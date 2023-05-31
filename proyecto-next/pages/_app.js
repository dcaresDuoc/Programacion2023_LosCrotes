import '@/styles/globals.scss'
import { NextUIProvider } from '@nextui-org/react'
import Layout from '../components/Layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Find some</title>
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}
