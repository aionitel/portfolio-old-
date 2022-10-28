import React from 'react'
import Lottie from 'react-lottie';
import catAnimation from '../../animations/cat.json'

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
    <div>
      <Lottie 
	      options={defaultOptions}
        height={100}
        width={200}
      />
    </div>
  )
}

export default Cat;