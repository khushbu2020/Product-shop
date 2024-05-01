import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUES.IDLE,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // not any async function directlly use in reducers [do not do this Never]


    // setproducts: (state, action) => {
    //   state.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // },
  },
  extraReducers:(builder)=>{
builder
.addCase(fetchProduct.pending,(state, action)=>{
  state.status = STATUES.LOADING;
})
.addCase(fetchProduct.fulfilled,(state, action)=>{
  state.data = action.payload;
  state.status = STATUES.IDLE;
})
.addCase(fetchProduct.rejected,(state, action)=>{
  state.status = STATUES.ERROR;
})
  }
});
export const { setproducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// thunks method : 1    [function under function call that is call thunk]

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  let result = await fetch("https://fakestoreapi.com/products");
  let data = await result.json();
  return data;
});

// export function fetchProduct() {
//     return  async function fetchProductthunk(dispatch,getState) {
//         dispatch(setStatus(STATUES.LOADING))
//         try {
//             let result = await fetch("https://fakestoreapi.com/products");
//             let data = await result.json();
//             dispatch(setproducts(data))
//             dispatch(setStatus(STATUES.IDLE))
//         } catch (error) {
//             console.log("Error :", error)
//             dispatch(setStatus(STATUES.ERROR))
//         }
//     }
// }
