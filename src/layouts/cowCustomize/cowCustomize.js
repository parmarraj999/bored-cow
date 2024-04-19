import React, { useState } from 'react'
import './cowCustomize.css'
import Scene from './scene'
import Eye from './eye'
import Outfit from './outfit'
import Accessories from './accessories'

function CowCustomize() {

    const [currItem, setCurrItem] = useState("scene")

    const starOver = () => {
        setSceneURL("../assets/item-img/scene-1-desktop.png")
        setEyeURL("../assets/eyes/cow-face.png")
        setLegURL("")
        setOutfitURL("")
    }

    const [sceneURL, setSceneURL] = useState("../assets/item-img/scene-1-desktop.png");
    const [eyeURL, setEyeURL] = useState("../assets/eyes/cow-face.png")
    const [legURL,setLegURL] = useState("../assets/legs/legs1.webp")
    const [outfitURL,setOutfitURL] = useState("../assets/outfit/short-sleeve-shirt-1.webp")
    const [hatURL,setHatURL] = useState("../assets/hats/hat1.webp")

    return (
        <div className='cow-customize-section' >
            <h1 className='header-title' >create-a-cow</h1>
            <div className='cow-customize-wrapper' >
                <div className='scene'>
                    <img className='main-scene-img' style={{ width: "100%", height: "100%" }} src={`${sceneURL}`} />
                    <div className='cow-container' >
                        <img className='main-cow-img' src='../assets/outfit/cow-model.webp' />
                        <img className='cow-hat' src={`${hatURL}`} />
                        <div className='cow-face-container' >
                            <img src={`${eyeURL}`} className='cow-face' />
                        </div>
                        <img src={`${outfitURL}`} className='cow-outfit' />
                        <img src={`${legURL}`} className='cow-legs' />
                    </div>
                </div>
                <div className='items-container'>
                    <div className='item-nav' >
                        <div className={currItem === "scene" ? "bg-yellow" : ""} onClick={() => setCurrItem("scene")}>scenes</div>
                        <div className={currItem === "eye" ? "bg-yellow" : ""} onClick={() => setCurrItem("eye")}>eye</div>
                        <div className={currItem === "outfit" ? "bg-yellow" : ""} onClick={() => setCurrItem("outfit")}>outfit</div>
                        <div className={currItem === "accessories" ? "bg-yellow" : ""} onClick={() => setCurrItem("accessories")}>accessories</div>
                    </div>
                    {currItem === "scene" ? <Scene setSceneURL={setSceneURL} /> : ""}
                    {currItem === "eye" ? <Eye setEyeURL={setEyeURL} /> : ""}
                    {currItem === "outfit" ? <Outfit setOutfitURL={setOutfitURL} /> : ""}
                    {currItem === "accessories" ? <Accessories setLegURL={setLegURL} setHatURL={setHatURL} /> : ""}
                    <p className='start-btn' onClick={starOver}> start over</p>
                </div>
            </div>
        </div>
    )
}

export default CowCustomize