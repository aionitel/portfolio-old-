import type { NextPage } from 'next'
import Head from 'next/head';
import TypewriterComponent from 'typewriter-effect';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div
        className='h-screen'
        style={{
          fontSize: 0
        }}
      >
        <TypewriterComponent 
          options={{
            'strings': ['Welcome to my homepage.'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  )
}

export default Home;