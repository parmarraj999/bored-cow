import React from 'react'
import "./footer.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

function Footer() {

    useGSAP(()=>{
        gsap.from(".footer-container > div > h1",{
            y:70,
            opacity:0,
            scrollTrigger:{
                trigger:".footer-container > div > h1",
                scrub:1,
                start:"top 95%",
                end:"top 92%"
            }
        })
        gsap.from(".footer-container > div > img",{
            y:70,
            opacity:0,
            scrollTrigger:{
                trigger:".footer-container > div > img",
                scrub:1,
                start:"top 95%",
                end:"top 92%"
            }
        })
    })

  return (
    <div className='footer-container'>
        <div style={{padding:"2rem"}}>
            <h1 className='header-title' >by <a style={{color:"#ffba01"}} href='https://github.com/parmarraj999'>raj parmar</a></h1>
        </div>
        <div style={{width:"100%"}}>
            <img src='../assets/images/sun.png' />
        </div>
    </div>
  )
}

export default Footer