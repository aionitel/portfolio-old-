import React from 'react'
import { motion } from 'framer-motion';
import { BiServer } from 'react-icons/bi'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { MdOutlinePhonelink } from 'react-icons/md'
import { IconType } from 'react-icons';

interface AboutDataProps {
  Icon: IconType,
  text: string
}

const AboutData: AboutDataProps[] = [
  {
    Icon: MdOutlinePhonelink,
    text: 'Responsive',
  },
  {
    Icon: BiServer,
    text: 'server'
  },
  {
    Icon: HiOutlineDeviceMobile,
    text: 'idk'
  },
  {
    Icon: IoIosRocket,
    text: 'fast'
  }
]

const ScrollAbout: React.FC = () => {
  return (
    <div className='flex-row'>
      <div className='text-center text-4xl font-inter'>
        <motion.h1
          className='underline underline-offset-[20px] lg:underline-offset-[35px] decoration-dotted'
          initial='hidden'
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, translateX: 0 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >ABOUT</motion.h1>
      </div>
      <div className='flex-row lg:flex ml-36 lg:ml-0 justify-center mt-20'>
        {
          AboutData.map(item => (
            <div key=''>
              <ScrollAboutItem Icon={item.Icon} text={item.text} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

const ScrollAboutItem: React.FC<AboutDataProps> = ({ Icon, text }) => {
  return (
    <div className='flex-row lg:mx-20 my-8'>
      <div className='bg-teal-400 w-32 h-32 rounded-lg text-7xl flex justify-center'>
        <Icon className='mt-5' />
      </div>
      <h1>{text}</h1>
    </div>
  )
}

export default ScrollAbout;