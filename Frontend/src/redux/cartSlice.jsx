import { createSlice } from "@reduxjs/toolkit" ;
import { message } from "antd";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart2:[]
    },
    reducers:{
        addToCart:(state , action)=>{
            state.cart2.push(action.payload)
            console.log(state.cart2[0])
        },
        removeFromCart:(state,actions)=>{
            state.cart2=state.cart2.filter(product=>{
                return product.id!=actions.payload
            })
        },
        IncreaseQuantity:(state,actions)=>{
            state.cart2.map(product=>{
                if(product.id == actions.payload){
                    product.quantity++
                }
            })
        },
        DecreaseQuantity:(state,actions)=>{
            state.cart2.map(product=>{
                if(product.id == actions.payload){
                    if(product.quantity >1)
                    {
                        product.quantity--;
                    }
                    else{
                        message.error("Quantity Should Not be Less Then One")
                    }
                    
                }
            })

        }
    }
})

export const {
    addToCart , 
    removeFromCart,
    IncreaseQuantity,
    DecreaseQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
