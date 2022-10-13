import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, FadeUp, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ScrollAbout: React.FC = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <div className='flex-row'>
            <h1>About</h1>
            <div>
              Another
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default ScrollAbout;