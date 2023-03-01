import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-white">
      <Head>
        <link rel="icon" href="favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App;