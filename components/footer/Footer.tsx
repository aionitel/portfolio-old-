import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-dotted pt-10 flex-row text-center lg:flex lg:justify-between px-8'>
      <h1 className='mt-16 text-sm text-chartGray'>© 2023 Alex Ionitel</h1>
      <div className='flex text-4xl lg:mt-16 my-10 pb-20'>
        <a className='mx-3 hover:scale-110 transition-all duration-300' href='https://github.com/oranges0da' target='_blank' rel="noreferrer">
          <BsGithub />
        </a>
        <a className='hover:scale-110 transition-all duration-300 mr-auto' href='https://linkedin.com/in/alex-ionitel' target='_blank' rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer;