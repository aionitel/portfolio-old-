import React from 'react'
import ThemeSwitch from './ThemeSwitch';
import { BiAtom } from 'react-icons/bi'

const Header: React.FC = () => {
  return (
    <div className='flex justify-between w-screen'>
      <div className='flex'>
        <BiAtom className='text-3xl m-4 transition-all duration-300 hover:rotate-180' />
        <h1 className='font-bold text-2xl font-joesphSans'>Alex Ionitel</h1>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default Header;