import React from 'react'
import { motion } from 'framer-motion';

const width = 350;

const Projects: React.FC = () => {
  return (
    <div className='flex-row my-20'>
      <motion.h1
        className='text-4xl underline underline-offset-[20px] lg:underline-offset-[35px] decoration-dotted text-center'
        initial='hidden'
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1, translateX: 0 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >PROJECTS</motion.h1>
      <div className='flex-row lg:absolute lg:left-0 lg:translate-x-1/2 mt-24'>
        <div className='flex-row lg:flex text-center lg:text-left'>
          <img src='https://i.imgur.com/xXTzqZy.png' style={{ width }} />
          <div>
            <h1 className='font-bold text-2xl'>PennyETH</h1>
            <p>A crypto portfolio web app that allows users to connect their Metamask wallets and do txs.</p>
          </div>
        </div>
        <div>
          <img src='https://i.imgur.com/I9LVx4z.jpg' style={{ width }} />
        </div>
        <div>
          <img src='https://i.imgur.com/ApODatn.png' style={{ width }} />
        </div>
      </div>
    </div>
  )
}

export default Projects;