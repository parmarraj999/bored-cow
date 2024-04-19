import React, { useState } from 'react'
import './slideCard.css'
import Button from '../../components/button/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

function SlideCard() {

  useGSAP(() => {
    gsap.to(".slide-card", {
      x: 480,
      scrollTrigger: {
        trigger: ".slide-card",
        scrub: 2.5,
        start: "top 90%",
        end: "top 85%",
      }
    })
    gsap.to(".slide-card-mobile", {
      y: 480,
      scrollTrigger: {
        trigger: ".stil-card",
        scrub: 2.5,
        start: "top 90%",
        end: "top 85%",
      }
    })
  })

  return (
    <div className='slide-card-container' >
      <div className='slide-card-wrapper' >
        <div className='stil-card' >
          <h4>no cow milked</h4>
          <h2>Dairy from <br></br>fermantation</h2>
          <p>Dairy without cows sounds impossible, but it’s actually really simple. Picture a microbrewery that makes milk ingredients! Bored Cow looks, feels, tastes & acts just like the real thing, because it is the real thing.</p>
          <Button text="how it's made" />
          <div className='slide-card-mobile' >

          </div>
        </div>
        <div className='slide-card' >

        </div>

      </div>
    </div>
  )
}

export default SlideCard