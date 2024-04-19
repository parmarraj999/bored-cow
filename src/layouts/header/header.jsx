import React, { useRef, useState } from 'react'
import "./header.css"
import Button from '../../components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [currBtn ,setCurrBtn] = useState(false)

  const videoRef = useRef();

  function pause() {
      setCurrBtn(true)
      videoRef.current.pause();
  }
  function play() {
      setCurrBtn(false)
      videoRef.current.play()
  }


  return (
    <div className='header-container'>
      <video autoPlay loop muted className='header-video' ref={videoRef}>
        <source src='../../assets/videos/header-video.mp4'/>
      </video>
      <div className='header-btn' onClick={play}>
        <Button text="Shop Now"  />
      </div>
      {
        currBtn ? 
        <div className='play-btn' onClick={play} >
        <FontAwesomeIcon icon={faPlay}/>
      </div>
        : 
      <div className='pause-btn' onClick={pause}  >
        <FontAwesomeIcon icon={faPause}/>
      </div>
      }
      
    </div>
  )
}

export default Header