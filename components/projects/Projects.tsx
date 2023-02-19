import React from 'react'
import { motion } from 'framer-motion';
import { BiCoin } from 'react-icons/bi';
import { ProjectType } from '../utils/types';
import ProjectItem from './ProjectItem';
import { AiOutlineApi } from 'react-icons/ai'
import { MdOutlineStorefront } from 'react-icons/md'

const ProjectData: ProjectType[] = [
  {
    Icon: BiCoin,
    title: "PennyETH",
    desc: 'A crypto web app built with Next.js, Tailwind CSS, and Ethers.js that allows users to view technical and financial data about several crypto assets. Users can even browse the Bitcoin and Ethereum blockchains to view detailed information about blocks, transactions, and addresses.',
    image: 'https://i.imgur.com/xXTzqZy.png',
    website: 'https://pennyeth.com',
    code: 'https://github.com/oranges0da/pennyeth',
    showWeb: true
  },
  {
    Icon: AiOutlineApi,
    title: 'Entertainment API',
    desc: 'Public API that is up for consumption and completely free to use. Serves up information about movies, TV series, books, and music. Built with Go / Golang and Gin. Click view movie to visit the api and recieve a response of my favourite movie!',
    image: 'https://i.imgur.com/I9LVx4z.jpg',
    website: "https://entertainment-api.onrender.com/movie/title/?q=2001",
    code: 'https://github.com/oranges0da/entertainment-api',
    showWeb: false
  },
  {
    Icon: MdOutlineStorefront,
    title: 'Dipped Station',
    desc: 'Completely custom full-stack merchant store for chocolate dipped strawberries. Frontend built using Next.js and Tailwind CSS. Backend built with Node.js and Express, using Stripe as a payment processor.',
    image: 'https://i.imgur.com/aYEMumV.png',
    website: 'https://dippedstation.com',
    code: null,
    showWeb: true
  },
]

const Projects: React.FC = () => {
  return (
    <div className='flex-row'>
      <div>
        <motion.h1
          className='text-4xl text-center mt-8'
          initial='hidden'
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, translateX: 0 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >PROJECTS</motion.h1>
      </div>
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