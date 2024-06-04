import { createContext, useState } from "react";
import all_product from '../components/assests/all_product'

export const Shopcontext=createContext(null);
const getdefaultcart=()=>{
    let cart={}
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}
const ShopcontextProvider=(props)=>{
    const [cartitems,setCartitems]=useState(getdefaultcart())
    const addtocart=(itemid)=>{
         setCartitems((p)=>({...p,[itemid]:p[itemid]+1}))
         console.log(cartitems)
    }
    const removefromcart=(itemid)=>{
        setCartitems((p)=>({...p,[itemid]:p[itemid]-1}))
   }
   const gettotal=()=>{
    let total=0;
    for(let item in cartitems){
        if(cartitems[item]>0){
            let iteminfo=all_product.find((product)=>product.id==Number(item))
            total+=iteminfo.new_price * cartitems[item];
        }
    }
    return total;
}
const totalitems=()=>{
    let count=0;
    for(let item in cartitems){
        if(cartitems[item]>0){
            count+=cartitems[item];
        }
    }
    return count;
}
   const contextvalue={all_product,cartitems,addtocart,removefromcart,gettotal,totalitems};
    return (
        <Shopcontext.Provider value={contextvalue}>
                {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopcontextProvider