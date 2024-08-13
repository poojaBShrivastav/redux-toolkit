import { createSlice } from "@reduxjs/toolkit";
import {data} from "../ShoesData.js"
const initialState = {
    cart : [],
    data : data,
}

const customerSlice = createSlice({
    name : "cartItem",
    initialState,
    reducers : {
        AddtoCart : (state,action)=>{
          // console.log("trigerred")
            const newItem = action.payload;
      const existingItem = state.cart.find(item => item.id === newItem.id);

      if (existingItem) {
        // If item already exists in the cart, update the quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // Otherwise, add the new item to the cart
        state.cart.push({ ...newItem, quantity: newItem.quantity });
      }
        },
        increaseQty : (state,action)=>{
          const item = state.cart.find(item => item.id === action.payload);
          if (item) {
            item.quantity += 1;
          }
        },
        decreaseQty : (state,action)=>{
          const item = state.cart.find(item => item.id === action.payload);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
          } else {
            // Optionally, remove the item from the cart if quantity reaches 0
            state.cart = state.cart.filter(item => item.id !== action.payload);
          }
        }
        }
    }

)

export const {AddtoCart,increaseQty,decreaseQty} = customerSlice.actions
export default customerSlice.reducer;