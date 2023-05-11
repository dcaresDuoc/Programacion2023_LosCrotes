import '@/styles/globals.scss'
import { NextUIProvider } from '@nextui-org/react'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </NextUIProvider>
  )
}
