import React from 'react'
import './cowCustomize.css'

function Accessories({ setLegURL, setHatURL }) {
  return (
    <div className='item-container' >
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat1.webp")} >
          <img src='../assets/hats/hat-1-thumbnail.avif' />
        </div>
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat2.webp")}>
          <img src='../assets/hats/hat-2-thumbnail.avif' />
        </div>
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat3.webp")}>
          <img src='../assets/hats/hat-3-thumbnail.avif' />
        </div>
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat4.webp")}>
          <img src='../assets/hats/hat-4-thumbnail.avif' />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat5.webp")} >
          <img src='../assets/hats/hat-5-thumbnail.avif' />
        </div>
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat6.webp")} >
          <img src='../assets/hats/hat-6-thumbnail.avif' />
        </div>
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat7.webp")}>
          <img src='../assets/hats/hat-7-thumbnail.avif' />
        </div>
        <div className='small-img' onClick={()=>setHatURL("../assets/hats/hat8.webp")} >
          <img src='../assets/hats/hat-8-thumbnail.avif' />
        </div>

      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={() => setLegURL("../assets/legs/legs1.webp")} >
          <img src='../assets/legs/legs-1-thumbnail.png' />
        </div>
        <div className='small-img' onClick={() => setLegURL("../assets/legs/legs2.webp")}>
          <img src='../assets/legs/legs-2-thumbnail.png' />
        </div>
        <div className='small-img' onClick={() => setLegURL("../assets/legs/legs3.webp")} >
          <img src='../assets/legs/legs-3-thumbnail.png' />
        </div>
        <div className='small-img' onClick={() => setLegURL("../assets/legs/legs4.webp")} >
          <img src='../assets/legs/legs-4-thumbnail.png' />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={() => setLegURL("../assets/legs/legs5.webp")}>
          <img src='../assets/legs/legs-5-thumbnail.png' />
        </div>
      </div>
    </div>
  )
}

export default Accessories