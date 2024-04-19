import React from 'react'
import "./cowCustomize.css"

function Scene(props) {
  return (
    <div className='item-container' >
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-5-desktop.png")}>
          <img src='../assets/item-img/item-scene-1.png' />
        </div>
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-6-desktop.png")} >
          <img src='../assets/item-img/item-scene-2.png' />
        </div>
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-4-desktop.png")} >
          <img src='../assets/item-img/item-scene-3.png' />
        </div>
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-1-desktop.png")} >
          <img src='../assets/item-img/item-scene-4.png' />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-3-desktop.png")}>
          <img src='../assets/item-img/item-scene-5.png' />
        </div>
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-2-desktop.png")} >
          <img src='../assets/item-img/item-scene-6.png' />
        </div>
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-8-desktop.png")} >
          <img src='../assets/item-img/item-scene-7.png' />
        </div>
        <div className='small-img' onClick={()=>props.setSceneURL("../assets/item-img/scene-7-desktop.png")}>
          <img src='../assets/item-img/item-scene-8.png' />
        </div>
      </div>
    </div>
  )
}

export default Scene