import React from 'react'
import NavItem from './NavItem';
import { TbBottle } from 'react-icons/tb'
import ThemeSwitch from './ThemeSwitch';

interface NavData {
  title: string;
  path: string;
}

const NavData: NavData[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Works',
    path: '/works'
  }
]

const NavBar: React.FC = () => {
  return (
    <div className='flex'>
      <div className='flex'>
        <TbBottle className='text-4xl rotate-12 hover:rotate-0 transition-all duration-300' style={{ borderColor: 'orange ' }} />
        <h1>Alex Ionitel</h1>
      </div>
      <div className='flex'>
        {
          NavData.map(item => (
            <NavItem key='' data={item} />
          ))
        }
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default NavBar;