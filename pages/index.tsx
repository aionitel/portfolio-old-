import type { NextPage } from 'next'
import Head from 'next/head';
import { BiDownvote } from 'react-icons/bi'
import ScrollAbout from '../components/scroll/ScrollAbout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div className='h-screen'>
        <div
          className='text-center flex lg:text-left text-7xl lg:text-9xl my-8 lg:mx-72'
        >
        </div>
        <div className='flex justify-center text-7xl'>
          <BiDownvote className='block lg:hidden animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
            window.scrollTo({ top: screen.height, behavior: 'smooth' })
          }} />
          <BiDownvote className='hidden lg:block animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
            window.scrollTo({ top: screen.height - 80, behavior: 'smooth' })
          }} />
        </div>
      </div>
      <div className='h-screen'>
        <ScrollAbout />
      </div>
    </div>
  )
}

export default Home;