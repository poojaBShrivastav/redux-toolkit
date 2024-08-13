import React from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
function Allcartitem() {
  const cart = useSelector((state) => state.cartItem.cart);
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className='Buy'>

        <div className='method'>
          <input type="radio" name="delivery"></input> Cash on Delivery
          <input type="radio" name="delivery"></input> Credit Card
        </div>  

        <div className='payment_row'>
            <div className='detail'>

              <h3>Enter your card number : </h3>
              <input type="text" placeholder='Card Number'></input>

              <h3>Enter your card's expiry date</h3>
              <input type="text" placeholder='Expiry Date'></input>

              <h3>Enter your cvv number</h3>
              <input type="text" placeholder='CVV'></input>
              
             <div className='cnfm_payment'>
             <button className='payment'>Confirm Payment</button>
             </div>
            </div>
            <div className='items'>
              <h1>Cart</h1>

                  <table width="80%">
                    <tbody>
                    {
                    cart && cart.map((shoes)=>{
                        return(
                            <tr>
                                <th>
                                    <img src={shoes.image} height="50px" width="50px"/>
                                </th>
                                <th>{shoes.name}</th>
                                <th>{shoes.price}</th>
                                <th>{shoes.quantity}</th>
                            </tr>       
                        )
                    })
                }
                    </tbody>
                  </table>
                  <h3>Total : {total}</h3>
                  <Link to="/">
                              <button className='payment'>Go back to Shopping</button>
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Allcartitem
