import type { NextPage } from 'next'
import Head from 'next/head';
import TypewriterComponent from 'typewriter-effect';
import { BiDownvote } from 'react-icons/bi'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div
        className='text-center lg:text-left text-7xl lg:text-9xl my-8 lg:mx-72 h-[600px] lg:h-[700px]'
      >
        <TypewriterComponent 
          options={{
            strings: ['Hello'],
            autoStart: true,
            deleteSpeed: 50,
            delay: 100
          }}
        />
      </div>
      <div className='flex justify-center text-7xl animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
        window.scrollTo({ top: 700, behavior: 'smooth' })
      }}>
        <BiDownvote />
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default Home;