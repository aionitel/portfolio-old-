import React from 'react'
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi'
import { ProjectItem } from '../utils/types';

const width = 400;

interface ProjectItemProps {
  project: ProjectItem;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className='flex-row lg:flex my-20'>
      <img src={project.image} style={{ width }} />
      <div className='ml-2'>
        <div className='flex text-2xl my-7 font-medium justify-center lg:justify-start'>
          <project.Icon className='text-3xl' />
          <h1>{project.title}</h1>
        </div>
        <p className='text-chartGray'>{project.desc}</p>
        <div className='flex justify-center lg:justify-end text-4xl'>
          <a className='hover:cursor-pointer'>
            <BiLinkExternal href={project.website} target='_blank' />
          </a>
          <a href={project.code} target='_blank' rel="noreferrer">
            <BiCodeAlt />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;