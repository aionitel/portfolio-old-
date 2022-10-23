import React from 'react'
import { BsFileRichtext, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-silverPink border-dotted h-32 flex-row text-center lg:flex lg:justify-between my-10 px-8'>
      <h1 className='mt-16 text-sm'>© 2022 Alex Ionitel</h1>
      <div className='flex text-4xl lg:mt-16 mt-8'>
        <a className='h-2 hover:cursor-pointer ml-auto hover:scale-110'>
          <BsFileRichtext />
        </a>
        <a className='mx-3' href='https://github.com/oranges0da' target='_blank' rel="noreferrer">
          <BsGithub />
        </a>
        <a className='mr-auto' href='https://www.linkedin.com/in/alex-ionitel-27b625254' target='_blank' rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer;