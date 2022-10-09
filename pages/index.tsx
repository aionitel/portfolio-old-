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
        className='text-center lg:text-left text-7xl lg:text-9xl my-8 lg:mx-72'
      >
        <TypewriterComponent 
          options={{
            'strings': ['Welcome to my site.', 'I am a full stack developer working out of Canada.'],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 50
          }}
        />
      </div>
    </div>
  )
}

export default Home;