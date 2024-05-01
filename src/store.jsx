import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './counter/counterSlice'
import productReducer from './counter/productSlice'

export const store = configureStore({
  reducer:  {
    cart : cartReducer,
    product : productReducer,
},
})