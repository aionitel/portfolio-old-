import React from 'react'
import { motion } from 'framer-motion';
import { BiCoin } from 'react-icons/bi';
import { ProjectType } from '../utils/types';
import ProjectItem from './ProjectItem';
import { AiOutlineApi } from 'react-icons/ai'
import { GiStrawberry } from 'react-icons/gi'

const ProjectData: ProjectType[] = [
  {
    Icon: BiCoin,
    title: "PennyETH",
    desc: 'A crypto web app built with Next.js, Tailwind CSS, and Ethers.js that allows users to view crypto assets and browse the Bitcoin and Ethereum blockchain. Users can even connect their Metamask wallet to send and receive Ethereum.',
    image: 'https://i.imgur.com/xXTzqZy.png',
    website: 'test',
    code: 'https://github.com/oranges0da/pennyeth'
  },
  {
    Icon: AiOutlineApi,
    title: 'Entertainment API',
    desc: 'Public API that is up for consumption and completely free to use. Serves up information about movies, TV series, books, and music. Written in Go / Golang and using the Gin framework. (HTTP API framework for Go)',
    image: 'https://i.imgur.com/I9LVx4z.jpg',
    website: 'test',
    code: 'https://github.com/oranges0da/entertainment-api'
  },
  {
    Icon: GiStrawberry,
    title: 'Dippped',
    desc: 'Full stack and completely custom online merchant store for chocolate dipped strawberries. Frontend built using Next.js and Tailwind CSS. Backend built in Node.js with Express, and Stripe as a payment processor.',
    image: 'https://i.imgur.com/aYEMumV.png',
    website: 'test',
    code: 'https://github.com/oranges0da/dippped'
  }
]

const Projects: React.FC = () => {
  return (
    <div className='flex-row'>
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
      <div className='flex-row mt-24 lg:w-2/3 mx-auto text-center lg:text-left'>
        {
          ProjectData.map(item => (
            <div key=''>
              <ProjectItem project={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;