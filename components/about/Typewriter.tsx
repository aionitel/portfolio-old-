import React from 'react'
import TypewriterComponent from 'typewriter-effect';

// typing effect that will play on top of page
const Typewriter: React.FC = () => {
  return (
    <span className='lg:text-8xl text-4xl mx-6'>
      <h1 className='inline mr-2'>Hi! I am a full stack developer working out of Canada 🇨🇦 who loves oranges 🍊 and I love working with...</h1>
      <TypewriterComponent
        options={{
          strings: [
            "Next.JS",
            "Node",
            "React Native",
            "Tailwind CSS",
            "Express",
            "Stripe",
            "Golang",
            "PostgreSQL",
            "MongoDB",
            "Prisma"
          ],
          delay: 55,
          autoStart: true,
          loop: true,
          deleteSpeed: 75
        }}
      />
    </span>
  )
}

export default Typewriter;