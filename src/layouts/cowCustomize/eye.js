import React from 'react'
import "./cowCustomize.css"

function Eye({setEyeURL}) {
  return (
    <div className='item-container' >
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-1.png")} >
          <img src='../assets/eyes/eye-glass-1-thumbnail.png'/>
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-2.png")}>
          <img src='../assets/eyes/eye-glass-2-thumbnail.png'/>
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-3.png")} >
          <img src='../assets/eyes/eye-glass-3-thumbnail.png'/>
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-4.png")} >
          <img src='../assets/eyes/eye-glass-4-thumbnail.png'/>
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-5.png")}>
          <img src='../assets/eyes/eye-glass-5-thumbnail.png' />
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-6.png")} >
          <img src='../assets/eyes/eye-glass-6-thumbnail.png' />
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-7.png")} >
          <img src='../assets/eyes/eye-glass-7-thumbnail.png' />
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eye-glass-8.png")} >
          <img src='../assets/eyes/eye-glass-8-thumbnail.png' />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eyes-medium.png")} >
          <img src="../assets/eyes/medium-eye-thumbnail.png" />
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/cow-face.png")} >
          <img src="../assets/eyes/small-eye-thumbnail.png" />
        </div>
        <div className='small-img' onClick={()=>setEyeURL("../assets/eyes/eyes-big.png")} >
          <img src="../assets/eyes/big-eye-thumbnail.png" />
        </div>
      </div>
    </div>
  )
}

export default Eye