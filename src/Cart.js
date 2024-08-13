import React from 'react'
import { increaseQty,decreaseQty } from './component/Slice';
import { useDispatch, useSelector } from 'react-redux';
function Cart() {
    const cart = useSelector((state) => state.cartItem.cart);
    const dispatch = useDispatch()
    const total = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      function increaseData(id){
            dispatch(increaseQty(id))
        }

    function decreaseData(id){
            dispatch(decreaseQty(id))
        }

  return (
    <>
    <h1 >Cart</h1>
      {
        <table width="100%">
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
                                <th>
                                    <button onClick={()=>{
                                        increaseData(shoes.id)
                                    }}>+</button>
                                        {shoes.quantity}
                                    <button onClick={()=>{
                                        decreaseData(shoes.id)
                                    }}>-</button>
                                </th>
                            </tr>       
                        )
                    })
                }
            </tbody>
        </table>
      } 
      <h3>Total : {total}</h3>
      
    </>
  )
}

export default Cart
