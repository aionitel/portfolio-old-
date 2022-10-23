import React from 'react'
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi'
import { ProjectType } from '../utils/types';

interface ProjectItemProps {
  project: ProjectType;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className='flex-row lg:flex my-20'>
      <img src={project.image} className='rounded-md w-[400px] mx-auto' />
      <div className='ml-2'>
        <div className='flex text-2xl my-7 font-medium justify-center lg:justify-start'>
          <project.Icon className='text-3xl mr-0.5' />
          <h1>{project.title}</h1>
        </div>
        <p className='text-chartGray ml-1'>{project.desc}</p>
        <div className='flex justify-center lg:justify-end text-4xl'>
        </div>
      </div>
      <div className='flex text-end lg:mt-52 justify-center text-4xl'>
        <a className='hover:cursor-pointer mx-2'>
          <BiLinkExternal href={project.website} target='_blank' />
        </a>
        <a href={project.code} target='_blank' rel="noreferrer">
          <BiCodeAlt />
        </a>
      </div>
    </div>
  )
}

export default ProjectItem;