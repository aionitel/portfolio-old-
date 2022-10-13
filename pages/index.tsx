import type { NextPage } from 'next'
import Head from 'next/head';
import TypewriterComponent from 'typewriter-effect';
import { BiDownvote } from 'react-icons/bi'
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  const DynamicScrollAbout = dynamic(() => import('../components/scroll/ScrollAbout'), { ssr: false });

  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div
        className='text-center flex lg:text-left text-7xl lg:text-9xl my-8 lg:mx-72 h-[600px] lg:h-[700px]'
      >
        <TypewriterComponent
          options={{
            strings: ["Hello there!", "I'm Alex Ionitel.", "I am a full stack developer that loves to learn."],
            autoStart: true,
            deleteSpeed: 50,
            delay: 75,
            loop: true,
          }}
        />
      </div>
      <div className='flex justify-center text-7xl'>
        <BiDownvote className='animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} />
      </div>
      <div>
        <DynamicScrollAbout />
      </div>
    </div>
  )
}

export default Home;