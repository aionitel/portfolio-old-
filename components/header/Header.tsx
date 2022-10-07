import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch';
import { BiAtom } from 'react-icons/bi'

const Header: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='flex justify-between w-screen sticky top-0 z-[1000] backdrop-blur-sm'>
      <div className='flex hover:cursor-pointer m-1 transition-all text-4xl lg:text-3xl' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }}>
        <BiAtom style={{ transform: hover ? 'rotate(270deg)' : '' }} className='transition-all duration-500 m-1.5' />
        <h1 className='mt-0.5 font-caveat'>Alex Ionitel</h1>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default Header;