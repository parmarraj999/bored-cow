import React from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className='nav-container'>
            <div className='menu-btn' >
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className='nav-one' >
                <div className='shop-btn' >shop</div>
                <h4>Learn</h4>
                <h4>Bored?</h4>
            </div>
            <div className='logo-container' >
                <img src='../../assets/images/logo.png' />
            </div>
            <div className='nav-two' >
                <h4>Where to Buy</h4>
                <img className='nav-icon nav-two-search' src='../assets/images/search-icon.png'/>
                <img className='nav-icon' src='../assets/images/bag-icon.png' />
            </div>
        </div>
    )
}

export default Nav