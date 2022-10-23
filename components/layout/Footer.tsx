import React from 'react'
import { BsFileRichtext, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-silverPink border-dotted h-32 flex justify-between'>
      <h1>© 2022 Alex Ionitel</h1>
      <div className='flex'>
        <BsFileRichtext />
        <BsGithub />
        <BsLinkedin />
      </div>
    </div>
  )
}

export default Footer;