import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes'
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.png" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;