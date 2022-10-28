import React from 'react'
import Lottie from 'react-lottie'
import animationDesk from '../../animations/deskAnimation.json'

const Desk: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDesk,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie 
	      options={defaultOptions}
        height={400}
        width={800}
      />
    </div>
  )
}

export default Desk;