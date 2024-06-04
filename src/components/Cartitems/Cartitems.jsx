import React, { useContext } from 'react'
import './Cartitems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../assests/cart_cross_icon.png'

const Cartitems = () => {
    const {all_product,cartitems,removefromcart,gettotal}=useContext(Shopcontext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {
            all_product.map((e)=>{
                if(cartitems[e.id]>0){
                    return (<div>
                    <div className="cartitems-format cartitems-format-main">
                        <img className='cartoon' src={e.image}/>
                        <p>{e.name}</p>
                        <p> ₹{e.new_price}</p>
                        <button className='quantity'>{cartitems[e.id]}</button>
                        <p>₹ {e.new_price*cartitems[e.id]}</p>
                        <img className='remove' src={remove_icon} onClick={()=>removefromcart(e.id)}/>
                    </div>
                    <hr />
                </div>)
                }
                
            })
        }
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>₹ {gettotal()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shopping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>₹ {gettotal()}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cartitems