import React, { useRef, useState } from 'react'
import "./marqee.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

function Marqee() {

    const [currBtn, setCurrBtn] = useState(false);
    
    const videoRef = useRef();

    function pause() {
        setCurrBtn(true)
        videoRef.current.pause();
    }
    function play() {
        setCurrBtn(false)
        videoRef.current.play()
    }


    return (
        <div className='marqee-container' >
            <h2>now available at</h2>
            <div className='slider'>
                <video autoPlay loop muted ref={videoRef}
                 src="../../assets/videos/marqee-video.mp4"
                 type="video/mp4"
                >
                    {/* <source src='../../assets/videos/marqee-video.mp4'  ></source> */}
                </video>
                <div className='control-container'>
                    {
                        currBtn ?
                            <div className='marqee-play-btn' onClick={play} >
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                            : ""
                    }
                    {
                        currBtn ? "" :
                            <div className='marqee-pause-btn' onClick={pause} >
                                <FontAwesomeIcon icon={faPause} />
                            </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Marqee