import type { NextPage } from 'next'
import Head from 'next/head';
import { BiDownvote } from 'react-icons/bi'
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Typewriter from '../components/about/Typewriter';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div className='h-screen'>
        <div
          className='text-center flex my-8 lg:h-2/3 2xl:h-3/4'
        >
          <Typewriter />
        </div>
        <div className='flex justify-center text-7xl w-full bottom-0'>
          <BiDownvote className='block lg:hidden animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
            window.scrollTo({ top: screen.height, behavior: 'smooth' })
          }} />
          <BiDownvote className='hidden lg:block animate-pulse hover:animate-none hover:cursor-pointer' onClick={() => {
            window.scrollTo({ top: screen.height - 80, behavior: 'smooth' })
          }} />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div className='flex justify-center'>
        <Projects />
      </div>
    </div>
  )
}

export default Home;