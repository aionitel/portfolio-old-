import React from 'react'
import { BsFileRichtext, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-silverPink border-dotted h-32 flex-row text-center lg:flex lg:justify-between my-10 px-8'>
      <h1 className='mt-16 text-sm'>© 2022 Alex Ionitel</h1>
      <div className='flex text-4xl lg:mt-16 mt-8'>
        <div className='h-2 hover:cursor-pointer ml-auto'>
          <BsFileRichtext />
        </div>
        <div className='mx-2'>
          <BsGithub />
        </div>
        <div className='mr-auto'>
          <BsLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Footer;