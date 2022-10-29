import React from 'react'
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi'
import { ProjectType } from '../utils/types';

interface ProjectItemProps {
  project: ProjectType;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className='flex-row lg:flex my-20'>
      <img src={project.image} className='rounded-md w-[500px] h-full' />
      <div className='ml-2'>
        <div className='flex text-2xl my-7 font-medium justify-center lg:justify-start'>
          <project.Icon className='text-3xl mr-0.5' />
          <h1>{project.title}</h1>
        </div>
        <p className='text-chartGray ml-1'>{project.desc}</p>
        <div className='flex justify-center lg:justify-end mt-16'>
          <a className='hover:cursor-pointer mx-2 bg-orange-400 rounded-lg hover:rounded-none transition-all duration-300 flex hover:underline underline-offset-4' data-tip={<div></div>}>
            <h1 className='py-2 px-2.5'>Visit Site</h1>
            <BiLinkExternal className='text-3xl mt-[5px] pr-1.5' />
          </a>
          <a href={project.code} target='_blank' rel="noreferrer" className='rounded-lg bg-orange-400 hover:rounded-none transition-all duration-300 flex hover:underline underline-offset-4' data-tip={<div></div>}>
            <h1 className='p-2'>View Code</h1>
            <BiCodeAlt className='text-3xl mt-[5px] pr-1.5' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;