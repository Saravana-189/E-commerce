import React from 'react'
import arrow_icon from '../assests/breadcrum_arrow.png'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
    </div>
  )
}

export default Breadcrum