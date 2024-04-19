import React from 'react'
import './cowCustomize.css'

function Outfit({setOutfitURL}) {
  return (
    <div className='item-container' >
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/full-costume-1.webp")} >
          <img src="../assets/outfit/full-costume-1-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/full-costume-2.webp")}>
          <img src="../assets/outfit/full-costume-2-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/jacket-1.webp")}>
          <img src="../assets/outfit/jacket-1-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/jacket-3.webp")} >
          <img src="../assets/outfit/jacket-3-thumbnail.avif" />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/jacket-4.webp")}>
          <img src="../assets/outfit/jacket-4-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/long-sleeve-shirt-2.webp")} >
          <img src="../assets/outfit/long-sleeve-shirt-1-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/long-sleeve-shirt-1.webp")} >
          <img src="../assets/outfit/long-sleeve-shirt-2-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/short-sleeve-shirt-1.webp")} >
          <img src="../assets/outfit/short-sleeve-shirt-1-thumbnail.avif" />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/short-sleeve-shirt-2.webp")}>
          <img src="../assets/outfit/short-sleeve-shirt-2-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/short-sleeve-shirt-3.webp")} >
          <img src="../assets/outfit/short-sleeve-shirt-3-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/short-sleeve-shirt-4.png")}>
          <img src="../assets/outfit/short-sleeve-shirt-4-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/sweater-1.webp")}>
          <img src="../assets/outfit/sweater-1-thumbnail.avif" />
        </div>
      </div>
      <div className='item-img-container' >
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/sweater-2.png")} >
          <img src="../assets/outfit/sweater-2-thumbnail.avif" />
        </div>
        <div className='small-img' onClick={()=>setOutfitURL("../assets/outfit/swim-suit-1.png")} >
          <img src='../assets/outfit/swim-suit-1-thumbnail.avif' />
        </div>
      </div>
    </div>
  )
}

export default Outfit