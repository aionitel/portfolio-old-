import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-dotted pt-10 flex-row text-center md:flex md:justify-between px-8 w-full'>
      <h1 className='mt-16 text-sm text-chartGray'>© 2023 Alex Ionitel</h1>
      <div className='flex text-4xl lg:mt-16 my-10 pb-20 md:mx-0 md:w-fit mx-auto w-1/2'>
        <a className='mx-3 hover:scale-110 transition-all duration-300' href='https://github.com/oranges0da' target='_blank' rel="noreferrer">
          <BsGithub />
        </a>
        <a className='hover:scale-110 transition-all duration-300 mx-0.5' href='https://linkedin.com/in/alex-ionitel' target='_blank' rel="noreferrer">
          <BsLinkedin />
        </a>
        <a className='hover:scale-110 transition-all duration-300 ml-1' href='https://angel.co/u/alex-ionitel' target='_blank' rel="noreferrer">
          <img className='filter invert w-10' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands%2F512%2F20_Angellist_logo_logos-512.png&f=1&nofb=1&ipt=ef41241213263f209cf4cb0742c65f3397ad1ccd4627ae7ce2098aa7a84659e4&ipo=images' />
        </a>
      </div>
    </div>
  )
}

export default Footer;