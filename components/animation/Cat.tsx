import React from 'react'
import Lottie from 'react-lottie';
import catAnimation from '../../animations/cat.json'
import ReactTooltip from 'react-tooltip';

const Cat: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: catAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='flex justify-center lg:w-28'>
      <a href='https://www.github.com/oranges0da' target='__blank' data-tip='Click to see my Github!'>
        <Lottie 
          options={defaultOptions}
          height={100}
          width={200}
        />
      </a>
      <ReactTooltip place='top' />
    </div>
  )
}

export default Cat;