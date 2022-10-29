import React from 'react'
import TypewriterComponent from 'typewriter-effect';

const Typewriter: React.FC = () => {
  return (
    <span className='lg:text-left text-4xl lg:text-9xl inline'>
      <h1 className='inline mr-2'>Hi! Im a full stack developer working out of Canada 🇨🇦 and I love working with</h1>
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
            "PostgresSQL",
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