import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,action)=>{
      // normal core redux : method 
      // return [...state,action.payload];

      // redux toolkit => createslice : method
      state.push(action.payload)
    },
    remove:(state,action)=> {
      return state.filter(item=> item.id !== action.payload);
    },
  },
})
export const { add , remove } = counterSlice.actions

export default counterSlice.reducer