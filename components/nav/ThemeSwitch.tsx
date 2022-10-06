import React from 'react'
import { useTheme } from 'next-themes';
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='text-5xl'>
      {theme === 'dark' ? <MdDarkMode onClick={() => setTheme('light')} /> : <BsSun onClick={() => {setTheme('dark')}} />}
    </div>
  )
}

export default ThemeSwitch;