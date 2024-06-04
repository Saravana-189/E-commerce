import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Description from '../components/Descriptionbox/Description';
import Relatedproduct from '../components/Relatedproduct/Relatedproduct';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedproduct/>
    </div>
  )
}

export default Product