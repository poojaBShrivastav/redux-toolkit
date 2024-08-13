import React from 'react'
import { AddtoCart } from './component/Slice'
import { useDispatch, useSelector } from 'react-redux';

function Shoes({data}) {

  const dispatch = useDispatch()

  return (
    <div className='shoesCard'>
        <img src={data.image}  height="150px" width="150px"/>
        <p>{data.name}</p>
        <p>{data.price}</p>
        <button onClick={()=>{
          dispatch(AddtoCart(data))
        }}>Add to cart</button>
    </div>
  )
}

export default Shoes
