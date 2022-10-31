import React from 'react'
import Lottie from 'react-lottie'
import animationDesk from '../../animations/deskAnimation.json'

// desk animation right above projects section
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
        height={150}
        width={300}
      />
    </div>
  )
}

export default Desk;