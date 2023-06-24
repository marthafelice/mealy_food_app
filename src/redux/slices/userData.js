import { createSlice } from "@reduxjs/toolkit";
;

const initialState={
    userAccessToken:null
}


export const  userDataSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
        tokenGenerated:(state,action)=>{ 
            state.userAccessToken=action.payload
    
        }
    }
})

export default userDataSlice.reducer
export const {tokenGenerated} =userDataSlice.actions