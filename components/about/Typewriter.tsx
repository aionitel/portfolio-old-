import React from 'react'
import TypewriterComponent from 'typewriter-effect';

// typing effect that will play on top of page
const Typewriter: React.FC = () => {
  return (
    <span className='2xl:text-9xl md:text-8xl text-6xl mx-20'>
      <h1 className='inline mr-2'>Hello there! I'm a full stack software engineer based out of Canada 🇨🇦 who loves oranges 🍊 and I love working with</h1>
      <TypewriterComponent
        options={{
          strings: [
            "React.",
            "Node.",
            "other engineers.",
            "React Native.",
            "Laravel.",
            "Tailwind CSS.",
            "Vue.",
            "Bootstrap.",
            "Angular.",
            "Express.",
            "Kafka",
            "Stripe.",
            "Golang.",
            "PostgreSQL and MySQL.",
            "MongoDB.",
            "Firebase",
            "Prisma.",
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