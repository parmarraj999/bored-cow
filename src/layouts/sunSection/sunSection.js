import React from 'react'
import './sunSection.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Button from "../../components/button/button"

function SunSection() {

  useGSAP(() => {
    gsap.from(".sun-content > h1 > div", {
      y: 100,
      opacity: 0,
      stagger: .1,
      scrollTrigger: {
        trigger: ".sun-content > h1",
        scrub: 1,
        start: "top 80%",
        end: "top 76%"
      }
    })
    gsap.from(".milk-section > p", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sun-content > h1",
        scrub: 1,
      }
    })
  })

  return (
    <div className='sun-section-container' >
      <div className='sun-content' >
        <p className='sun-content-p'>planet-based</p>
        <h1 style={{ marginTop: "2rem" }} className='header-title' ><div>See</div><div>Our</div><div>climate</div></h1>
        <h1 className='header-title' ><div>Footprint</div></h1>
        <p>Bored Cow requires less land, uses less water, and generates fewer greenhouse gas emissions than conventional dairy milk. Want to see the numbers for yourself?</p>
        <div style={{ marginTop: '2rem' }} >
          <Button text="show me" />
        </div>
      </div>
      <div className='sun-video' >
        <video autoPlay loop muted>
          <source src='../../assets/videos/sun.mp4' ></source>
        </video>
      </div>
    </div>
  )
}

export default SunSection