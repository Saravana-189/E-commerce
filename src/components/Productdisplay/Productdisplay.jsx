import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../assests/star_icon.png'
import star_dull_icon from '../assests/star_dull_icon.png'
import { Shopcontext } from '../../context/Shopcontext'

const Productdisplay = (props) => {
    const {product}=props;
    const {addtocart}=useContext(Shopcontext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={product.image}/>
              <img src={product.image}/>
              <img src={product.image}/>
              <img src={product.image}/>
            </div>
            <div className="productdisplay-img">
                <img className='product-main'src={product.image}/>
            </div>
        </div>
        <div className="productdisplay-right">
           <h1>{product.name}</h1>
           <div className="productdisplay-star">
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_dull_icon}/>
            <p>(120)</p>
           </div>
           <div className="productdisplay-right-price">
            <div className="productdisplay-old">{product.old_price}</div>
            <div className="productdisplay-new">{product.new_price}</div>
           </div>
           <div className="productdisplay-discription">
            A lightweight, usually knitted, pull over,short sleeves and comfortable to wear it
           </div>
           <div className="productdisplay-size">
            <h1>Select Size</h1>
            <div className="productdisplay-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
           </div>
           <button onClick={()=>{addtocart(product.id)}}>Add to cart</button>
           <p className="productdisplay-right-category"><span>Category :</span> Women , T-Shirt, Crop Top</p>
           <p className="productdisplay-right-category"><span>Tags :</span> Modern , Latest, Trending</p>

        </div>
    </div>
  )
}

export default Productdisplay