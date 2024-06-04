import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
       <h1>Get exclusive offers on your Email</h1>
       <p>Subscribe to our newsletter and stay updated</p>
       <div>
        <input type='text' placeholder='Enter email' />
        <button>Subscribe</button>
       </div>
    </div>
  )
}

export default Newsletter