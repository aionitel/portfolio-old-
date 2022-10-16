import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { BiServer } from 'react-icons/bi'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { MdOutlinePhonelink } from 'react-icons/md'
import { IconType } from 'react-icons';
import { HiServer } from 'react-icons/hi'

interface AboutDataProps {
  Icon: IconType;
  title: string;
  text: string;
}

const AboutData: AboutDataProps[] = [
  {
    Icon: MdOutlinePhonelink,
    title: 'Responsive',
    text: 'Responsive designs and fast load times.',
  },
  {
    Icon: HiServer,
    title: 'Full Stack',
    text: 'server'
  },
  {
    Icon: HiOutlineDeviceMobile,
    title: 'Mobile',
    text: 'idk'
  },
  {
    Icon: IoIosRocket,
    title: 'Fast',
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
      <div className='flex-row lg:flex lg:ml-0 align-center justify-center mt-16 text-center'>
        {
          AboutData.map(item => (
            <div key=''>
              <ScrollAboutItem Icon={item.Icon} title={item.title} text={item.text} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

const ScrollAboutItem: React.FC<AboutDataProps> = ({ Icon, title, text }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='pl-36 lg:pl-0 lg:mx-20 my-8 text-center' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div className='bg-teal-400 w-28 h-28 rounded-lg text-6xl flex justify-center'>
        <Icon className='mt-5' />
      </div>
      <h1 className='my-2 text-xl font-bold mr-32 lg:mr-0'>{title}</h1>
    </div>
  )
}

export default ScrollAbout;