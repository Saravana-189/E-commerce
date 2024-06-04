import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart_icon from '../assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../context/Shopcontext';


const Navbar = () => {
    const [menu,setMenu]=useState("Shop");
    const {totalitems}=useContext(Shopcontext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <h1>Quick Buy</h1>
        </div>
       <ul className='nav-menu'>
        <li onClick={()=>setMenu("Shop")}><Link to='/'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Men")}><Link to='/mens'>Men</Link>{menu==='Men'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Women")}><Link to='/womens'>Women</Link>{menu==='Women'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Kids")}><Link to='/kids'>Kids</Link>{menu==='Kids'?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login">
       <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon}/></Link>
        <div className="nav-cart-count">{totalitems()}</div>
       </div>
    </div>
  )
}

export default Navbar