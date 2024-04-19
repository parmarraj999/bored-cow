import React from 'react'
import './couponSection.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Button from '../../components/button/button'

function CouponSection() {

    useGSAP(()=>{
        gsap.from(".coupon-header > p",{
            y:80,
            opacity:0,
            scrollTrigger:{
                trigger:".coupon-header > p",
                scrub:1,
                start:"top 95%",
                end:"top 90%"
            }
        })
        gsap.from(".coupon-header > h1 > div",{
            y:80,
            opacity:0,
            stagger:.15,
            scrollTrigger:{
                trigger:".coupon-header > p ",
                scrub:1,
                start:"top 95%",
                end:"top 90%"
            }
        })
        gsap.to(".scissor-line > img",{
            x:(window.innerWidth),
            duration:8,
            repeat:-1
        })
        gsap.to(".scissor-line-two > img",{
            x:-(window.innerWidth),
            duration:8,
            repeat:-1
        })
    })

    return (
        <div className='coupon-section-container' >
            <div className='coupon-header' >
                <p>GIVE COWS A BREAK</p>
                <h1 className='header-title' style={{display:"flex",gap:"1rem"}}><div>try</div><div>bored</div><div>cow</div><div>for</div><div>YOURSELF</div></h1>
            </div>
            <div className='main-coupon-container' >
                <div className='scissor-line' >
                    <img src='../../assets/videos/scissor.gif'/>
                </div>
                <div className='coupon-img'>
                    <img src='../../assets/images/coupon-img.png' />
                    <Button text="clip coupon"/>
                </div>
                <div className='scissor-line-two' >
                    <img src='../../assets/videos/scissor.gif'/>
                </div>
            </div>
        </div>
    )
}

export default CouponSection