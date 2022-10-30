import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch';
import { GiOrangeSlice } from 'react-icons/gi'

const Header: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='flex justify-between sticky top-0 z-[1000] backdrop-blur-sm'>
      <div className='flex hover:cursor-pointer m-3 text-4xl' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} onClick={() => {
        window.scrollTo({top: 0, behavior: 'smooth'}); // smoothly scrolling to top of page
      }}>
        <GiOrangeSlice style={{ transform: hover ? 'rotate(360deg)' : '' }} className='text-orange-500 transition-all duration-500 m-1.5' />
        <h1 className='mt-0.5 font-caveat'>Alex Ionitel</h1>
      </div>
      <div className='m-4'>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Header;