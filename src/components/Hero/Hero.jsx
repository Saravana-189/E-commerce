import React from 'react'
import './Hero.css'
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import hero_image from '../assests/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroleft">
           <h2>New Arrivals Only</h2>
           <div>
            <div className="hand-hand-icon">
                <p>New</p>
                <img src={hand_icon}/>
            </div>
            <p>Collections</p>
            <p>For everyone</p>
           </div>
           <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon}/>
           </div>
        </div>
        <div className="heroright">
          <img src={hero_image}/>
        </div>
    </div>
  )
}

export default Hero