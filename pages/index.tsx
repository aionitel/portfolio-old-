import type { NextPage } from 'next'
import Head from 'next/head';
import { BiDownvote } from 'react-icons/bi'
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import TypewriterComponent from 'typewriter-effect';
import Desk from '../components/animation/Desk';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alex Ionitel</title>
      </Head>
      <div className='h-screen'>
        <div
          className='text-center flex lg:text-left text-5xl lg:text-6xl my-8 w-screen'
          style={{ height: '60vh' }}
        >
          <h1 className='mr-2'>Hi! I'm a full stack developer working out of Canada 🇨🇦 and I love working with</h1>
          <TypewriterComponent
            options={{
              strings: [
                "Next.JS",
                "Node",
                "React Native.",
                "Tailwind CSS.",
                "Express.",
                "Stripe."
              ],
              delay: 60,
              autoStart: true,
              loop: true,
              deleteSpeed: 75
            }}
          />
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
      <div>
        <Desk />
        <About />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  )
}

export default Home;