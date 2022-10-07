import type { NextPage } from 'next'
import TypewriterComponent from 'typewriter-effect';

const Home: NextPage = () => {
  return (
    <div>
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
      <div className='h-screen bg-white dark:bg-white'>
        hello
      </div>
    </div>
  )
}

export default Home;