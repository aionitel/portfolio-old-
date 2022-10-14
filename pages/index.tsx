import type { NextPage } from 'next'
import Head from 'next/head';
import { BiDownvote } from 'react-icons/bi'
import { motion, useScroll } from 'framer-motion';
import ScrollAbout from '../components/scroll/ScrollAbout';

const Home: NextPage = () => {
  // nice bar at top of page that tracks user's scroll
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div className='h-screen'>
        <div
          className='text-center flex lg:text-left text-7xl lg:text-9xl my-8 lg:mx-72 h-[600px] lg:h-[700px]'
        >
        </div>
        <div className='flex justify-center text-7xl'>
          <BiDownvote className='animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
            window.scrollTo({ top: 1000, behavior: 'smooth' })
          }} />
        </div>
      </div>
      <div style={{ scaleX: scrollYProgress }} className='flex-row justify-center'>
        <ScrollAbout />
      </div>
    </div>
  )
}

export default Home;