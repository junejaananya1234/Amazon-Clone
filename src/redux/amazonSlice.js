import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const item = state.products.find((item) => item.deal_id === action.payload.deal_id);
      if (item) {
        
        item.quantity += action.payload.quantity;
      } else {
        
        state.products.push(action.payload);
      }
      
    },
   deleteItem: (state,action)=>{
         state.products = state.products.filter((item)=>item.id!== action.payload)
   },
   resetCart: (state)=>{
    state.products=[]
   }
  },
});

export const { addToCart,deleteItem,resetCart } = amazonSlice.actions;
export default amazonSlice.reducer;
