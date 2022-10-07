import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch';
import { BiAtom } from 'react-icons/bi'

const Header: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='flex justify-between w-screen'>
      <div className='flex hover:cursor-pointer text-2xl m-1' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <BiAtom style={{ transform: hover ? 'rotate(270deg)' : '' }} className='transition-all duration-500 m-1.5' />
        <h1 className='mt-0.5 text-2xl font-caveat'>Alex Ionitel</h1>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default Header;