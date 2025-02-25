import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo_big.png'
import instagram_icon from '../assests/instagram_icon.png'
import whatsapp_icon from '../assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-img">
            <h2>Quick Buy</h2>
        </div>
        <div className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </div>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
               <img src={instagram_icon}/>
            </div>
            <div className="footer-icons-container">
               <img src={whatsapp_icon}/>
            </div>
        </div>
        <div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer