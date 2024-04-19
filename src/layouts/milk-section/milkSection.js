import React from 'react'
import "./milkSection.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import MilkContainer from './milkContainer'

function MilkSection() {

    useGSAP(() => {
        gsap.from(".title > h1", {
            y: 100,
            opacity: 0,
            stagger: .1,
            scrollTrigger:{
                trigger:".title > h1",
                scrub:1,
                start:"top 80%",
                end:"top 76%"
            }
        })
        gsap.from(".milk-section > p", {
            y: 100,
            opacity: 0,
            scrollTrigger:{
                trigger:".title > h1",
                scrub:1,
            }
        })
    })

    return (
        <div className='milk-section' >
            <div className='milk-section-header header-title' >
                <div className='title'>
                <h1>YOU'VE</h1> <h1>NEVER</h1><h1> HAD</h1> <h1>A</h1><h1> MILK</h1>
                </div>
                <div className='title'>
                <h1>ALTERNATIVE</h1> <h1>LIKE</h1><h1> BORED</h1> <h1> COW</h1>
                </div>
            </div>
            <p>Bored Cow is packed with sustainable milk protein, and rich in calcium and vitamin D. It's perfect for cooking, baking, and coffee making. That's why we call it the first milk alternative to do it all.</p>
            <MilkContainer/>
    
        </div>
    )
}

export default MilkSection