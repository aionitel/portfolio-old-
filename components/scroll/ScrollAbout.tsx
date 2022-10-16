import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { MdOutlinePhonelink } from 'react-icons/md'
import { TbServer, TbServerOff } from 'react-icons/tb'
import { BsPhone, BsPhoneVibrate } from 'react-icons/bs'
import { FaLaptop, FaLaptopCode } from 'react-icons/fa'

const ScrollAbout: React.FC = () => {
  const [hover, setHover] = useState<string>("");

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
      <div className='flex-row lg:flex pl-36 lg:pl-0 lg:ml-0 justify-center mt-20 lg:text-center'>
        <div className='flex-row lg:mx-14 my-8' onMouseOver={() => setHover('laptop')} onMouseOut={() => setHover("")}>
          <div className='bg-teal-400 w-28 h-28 rounded-lg text-6xl flex justify-center lg:ml-2'>
            <div className='text-7xl mt-4'>
              {hover === 'laptop' ? <FaLaptopCode /> : <FaLaptop />}
            </div>
          </div>
          <h1 className='font-bold text-2xl my-2'>Responsive</h1>
        </div>
        <div className='flex-row lg:mx-14 my-8' onMouseOver={() => setHover('server')} onMouseOut={() => setHover("")}>
          <div className='bg-teal-400 w-28 h-28 rounded-lg text-6xl flex justify-center'>
            <div className='text-7xl mt-4'>
              {hover === 'server' ? <TbServerOff /> : <TbServer />}
            </div>
          </div>
          <h1 className='font-bold text-2xl my-2'>Full-Stack</h1>
        </div>
        <div className='flex-row lg:mx-14 my-8' onMouseOver={() => setHover('phone')} onMouseOut={() => setHover("")}>
          <div className='bg-teal-400 w-28 h-28 rounded-lg text-6xl flex justify-center'>
            <div className='mt-7'>
              {hover === 'phone' ? <BsPhoneVibrate /> : <BsPhone style={{ fontSize: 50 }} />}
            </div>
          </div>
          <h1 className='font-bold text-2xl my-2 ml-4 lg:ml-0'>Mobile</h1>
        </div>
        <div className='flex-row lg:mx-14 my-8' onMouseOver={() => setHover('rocket')} onMouseOut={() => setHover("")}>
          <div className='bg-teal-400 w-28 h-28 rounded-lg text-6xl flex justify-center'>
            <IoIosRocket className={hover === 'rocket' ? 'mt-5 animate-bounce' : 'mt-5'} />
          </div>
          <h1 className='font-bold text-2xl my-2 ml-7 lg:ml-0'>Fast</h1>
        </div>
      </div>
    </div>
  )
}

export default ScrollAbout;