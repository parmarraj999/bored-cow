import React, { useRef } from 'react'
import './milkSection.css'
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';

function MilkContainer() {

  useGSAP(()=>{
    gsap.from(".milk-box",{
      y:100,
      opacity:0,
      stagger:.8,
      scrollTrigger:{
        trigger:".milk-box",
        scrub:1,
        start:"top 80%",
        end:"top 70%"
      }
    })
  })


  const glassRefOne = useRef()
  const boxRefOne = useRef();

  function mouseEnterOne() {
    gsap.to(glassRefOne.current, {
      scale: 1,
      duration: .2,
    })
    gsap.to(boxRefOne.current, {
      opacity: 0,
      duration: .2
    })
  }

  function mouseLeaveOne() {
    gsap.to(glassRefOne.current, {
      scale: .5,
      duration: .2,
    })
    gsap.to(boxRefOne.current, {
      opacity: 1,
      duration: .2
    })
  }

  const glassRefTwo = useRef()
  const boxRefTwo = useRef();

  function mouseEnterTwo() {
    gsap.to(glassRefTwo.current, {
      scale: 1,
      duration: .2,
    })
    gsap.to(boxRefTwo.current, {
      opacity: 0,
      duration: .2
    })
  }

  function mouseLeaveTwo() {
    gsap.to(glassRefTwo.current, {
      scale: .5,
      duration: .2,
    })
    gsap.to(boxRefTwo.current, {
      opacity: 1,
      duration: .2
    })
  }


  const glassRefThree = useRef()
  const boxRefThree = useRef();

  function mouseEnterThree() {
    gsap.to(glassRefThree.current, {
      scale: 1,
      duration: .2,
    })
    gsap.to(boxRefThree.current, {
      opacity: 0,
      duration: .2
    })
  }

  function mouseLeaveThree() {
    gsap.to(glassRefThree.current, {
      scale: .5,
      duration: .2,
    })
    gsap.to(boxRefThree.current, {
      opacity: 1,
      duration: .2
    })
  }

  const glassRefFour = useRef()
  const boxRefFour = useRef();

  function mouseEnterFour() {
    gsap.to(glassRefFour.current, {
      scale: 1,
      duration: .2,
    })
    gsap.to(boxRefFour.current, {
      opacity: 0,
      duration: .2
    })
  }

  function mouseLeaveFour() {
    gsap.to(glassRefFour.current, {
      scale: .5,
      duration: .2,
    })
    gsap.to(boxRefFour.current, {
      opacity: 1,
      duration: .2
    })
  }



  return (
    <div className='milk-box-container'>
      <div className='milk-box-wrapper' >
        <div className='milk-box'>
          <div className='box-position' >
            <img src='../../assets/images/Original-BC.png' alt='' className='box' ref={boxRefOne} onMouseEnter={mouseEnterOne} onMouseLeave={mouseLeaveOne} />
            <h2>shop original</h2>
            <img src='../../assets/images/tap-img.png'className='tap-img' style={{width:"60px"}}/>
          </div>
          <img src='../../assets/images/Original-glass.png' alt='' className='glass' ref={glassRefOne} />
        </div>
        <div className='milk-box' >
          <div className='box-position' >
            <img src='../../assets/images/Vanilla-BC.png' alt='' className='box' ref={boxRefTwo} onMouseEnter={mouseEnterTwo} onMouseLeave={mouseLeaveTwo} />
            <h2>shop vanilla</h2>
            <img src='../../assets/images/tap-img.png'className='tap-img' style={{width:"60px"}}/>
          </div>
          <img src='../../assets/images/Vanilla-glass.png' alt='' className='glass' ref={glassRefTwo} />
        </div>
        <div className='milk-box' >
          <div className='box-position' >
            <img src='../../assets/images/Chocolate-BC.png' alt='' className='box' ref={boxRefThree} onMouseEnter={mouseEnterThree} onMouseLeave={mouseLeaveThree} />
            <h2>shop chocolate</h2>
            <img src='../../assets/images/tap-img.png'className='tap-img' style={{width:"60px"}}/>
          </div>
          <img src='../../assets/images/Chocolate-glass.png' alt='' className='glass' ref={glassRefThree} />
        </div>
        <div className='milk-box' >
          <div className='box-position' >
          <img src='../../assets/images/Strawberry-BC.png' alt='' className='box' ref={boxRefFour} onMouseEnter={mouseEnterFour} onMouseLeave={mouseLeaveFour} />
          <h2>shop vanilla</h2>
          <img src='../../assets/images/tap-img.png'className='tap-img' style={{width:"60px"}}/>
          </div>
          <img src='../../assets/images/Strawberry-glass.png' alt='' className='glass' ref={glassRefFour} />
        </div>
      </div>
    </div>
  )
}

export default MilkContainer