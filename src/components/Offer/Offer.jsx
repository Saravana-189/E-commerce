import React from 'react'
import './Offer.css'
import exclusive_image from '../assests/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
     <div className="offerleft">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON QUICK BUY</p>
        <button>Check Now</button>
     </div>
     <div className="offerright">
       <img src={exclusive_image}/>
     </div>
    </div>
  )
}

export default Offer