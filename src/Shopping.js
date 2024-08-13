import React from 'react'
import Shoes from "./Shoes.js"
import Cart from "./Cart.js"
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
function Shopping() {
  const data = useSelector((state) => state.cartItem.data);
  const cart = useSelector((state) => state.cartItem.cart);
  return (
    <>
    <div className='row'>
         <div className='shoes'>
               {
                 data.map(function(shoe){

                   return(
                     <Shoes data={shoe}/>
                   )
                 })
               }
         </div>
         <div className='cart'>
               <Cart/>
                <Link to="/cart">
                         <button disabled={cart.length==0 ? true : false}  className='payment'>Proceed to Payment</button>
                 </Link> 
         </div>
     </div>  
</>

  )
}

export default Shopping
