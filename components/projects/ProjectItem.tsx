import React from 'react'
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi'
import { ProjectType } from '../utils/types';
import { motion } from 'framer-motion'
import { MdMovie } from 'react-icons/md'
import { HiLockClosed } from 'react-icons/hi'

interface ProjectItemProps {
  project: ProjectType;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className='flex-row lg:flex my-20'>
      <motion.img 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 }
        }}
        src={project.image} 
        className='rounded-md w-[500px] h-full'
      />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1 }
        }}
        className='ml-2'
      >
        <div className='flex text-2xl my-7 font-medium justify-center lg:justify-start'>
          <project.Icon className='text-3xl mr-0.5' />
          <h1>{project.title}</h1>
        </div>
        <p className='text-chartGray ml-1'>{project.desc}</p>
        <div className='flex justify-center lg:justify-end mt-14'>
          { project.showWeb 
            ? 
            <a href={project.website} target='__blank' className='hover:cursor-pointer mx-2 bg-orange-300 hover:bg-orange-400 rounded-lg hover:rounded-none transition-all duration-300 flex hover:underline underline-offset-4'>
              <h1 className='py-2 px-2.5'>Visit Site</h1>
              <BiLinkExternal className='text-3xl mt-[5px] pr-1.5' />
            </a>
            :
            <a href='https://milkapi.app/movie/title/?q=2001' target='__blank' className='hover:cursor-pointer mx-2 bg-orange-300 hover:bg-orange-400 rounded-lg hover:rounded-none transition-all duration-300 flex hover:underline underline-offset-4'>
              <h1 className='my-2 px-2.5'>View Movie</h1>
              <MdMovie className='text-3xl mt-[5px] pr-1.5' />
            </a>
          }
          {
            project.code 
            ? <a href={project.code} target='_blank' rel="noreferrer" className='rounded-lg bg-orange-300 hover:bg-orange-400 hover:rounded-none transition-all duration-300 flex hover:underline underline-offset-4'>
                <h1 className='p-2'>View Code</h1>
                <BiCodeAlt className='text-3xl mt-[5px] pr-1.5' />
              </a>
            : <div className='rounded-lg bg-orange-300 flex'>
                <h1 className='p-2'>Closed Source</h1>
                <HiLockClosed className='text-3xl mt-[5px] pr-1.5' />
              </div>
          }
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectItem;