import { createSlice } from "@reduxjs/toolkit";

const initialState={
    displayOrder:false,
    displayTrackOrder:false,
    displayRiderChat:false
}
export const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
     Order:(state,action)=>{
        if(action.payload==='openOrder'){
            state.displayOrder=true
        }
        if(action.payload==='closeOrder'){
            state.displayOrder=false
        }
        if(action.payload==='openTrackOrder'){
            state.displayTrackOrder=true
        }
        if(action.payload==='closeTrackOrder'){
            state.displayTrackOrder=false
        }  
        if(action.payload==='displayRiderChat'){
            state.displayRiderChat=true
        }
        if(action.payload==='closeRiderChat'){
            state.displayRiderChat=false
        }
     }
    }
}) 


export const { Order} =orderSlice.actions;
export default orderSlice.reducer;
