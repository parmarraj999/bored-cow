import React from 'react'
import "./vanSection.css"

function VanSection() {
  return (
    <div className='van-section-container' >
        <video autoPlay loop muted>
            <source src='../../assets/videos/section-video.mp4' ></source>
        </video>
    </div>
  )
}

export default VanSection