import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoIosRocket } from 'react-icons/io'
import { TbServer, TbServerOff } from 'react-icons/tb'
import { FaLaptop, FaLaptopCode } from 'react-icons/fa'
import { RiLightbulbLine, RiLightbulbFlashLine } from 'react-icons/ri'

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
      <div className='flex justify-center'>
        <div className='flex-row lg:flex lg:ml-20 justify-center mt-8 lg:mt-20 lg:text-center'>
          <div className='flex-row my-8'>
            <div 
              className='bg-sky-400 w-28 h-28 rounded-lg text-6xl flex justify-center lg:ml-5'
              onMouseOver={() => setHover('laptop')} onMouseOut={() => setHover("")}
            >
              <div className='text-7xl mt-4'>
                {hover === 'laptop' ? <FaLaptopCode /> : <FaLaptop />}
              </div>
            </div>
            <h1 className='font-bold text-2xl my-2'>Responsive</h1>
            <h1 
              className='text-chartGray text-lg'
            >
              Responsive designs 
              <br /> that work on 
              <br /> any type of layout. 
              <br /> (Try this on mobile, 
              <br /> it looks great!)</h1>
          </div>
          <div className='flex-row lg:mx-20 my-8'>
            <div 
              className='bg-sky-400 w-28 h-28 rounded-lg text-6xl flex justify-center lg:ml-12'
              onMouseOver={() => setHover('server')} onMouseOut={() => setHover("")}
            >
              <div className='text-7xl mt-4'>
                {hover === 'server' ? <TbServerOff /> : <TbServer />}
              </div>
            </div>
            <h1 className='font-bold text-2xl my-2'>Full-Stack</h1>
            <h1
              className='text-chartGray text-lg'
            >
              Front-end and
              <br /> back-end experience. 
              <br /> Can write client-side code 
              <br /> that looks great, and also
              <br /> server-side code that runs
              <br /> efficiently and smooth.</h1>
          </div>
          <div className='flex-row my-8'>
            <div 
              className='bg-sky-400 w-28 h-28 rounded-lg text-6xl flex justify-center lg:ml-12'
              onMouseOver={() => setHover('bulb')} onMouseOut={() => setHover("")}
            >
              <div className='mt-5 text-7xl'>
                {hover === 'bulb' ? <RiLightbulbFlashLine /> : <RiLightbulbLine />}
              </div>
            </div>
            <h1 className='font-bold text-2xl my-2 ml-4 lg:ml-0'>Intuitive</h1>
            <h1
              className='text-chartGray text-lg'
            >
              Not only is my UI/UX,
              <br /> intuitive, I am aswell!
              <br /> I am very eager to learn
              <br /> and adapt in a collaborative
              <br /> environment, with other
              <br /> developers and peers.
            </h1>
          </div>
          <div className='flex-row lg:mx-20 my-8'>
            <div 
              className='bg-sky-400 w-28 h-28 rounded-lg text-6xl flex justify-center lg:ml-10'
              onMouseOver={() => setHover('rocket')} onMouseOut={() => setHover("")}
            >
              <IoIosRocket className={hover === 'rocket' ? 'mt-5 animate-bounce' : 'mt-5'} />
            </div>
            <h1 className='font-bold text-2xl my-2 ml-7 lg:ml-0'>Fast</h1>
            <h1
              className='text-chartGray text-lg'
            >
              Fast performance times
              <br /> are a top priority
              <br / > of mine along with
              <br /> excellent 
              <br /> user experience.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollAbout;