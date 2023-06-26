import { createSlice } from "@reduxjs/toolkit";
;

const initialState={
    userAccessToken:null,
    userId:null,
}


export const  userDataSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
        tokenGenerated:(state,action)=>{ 
            state.userAccessToken=action.payload
    
        },
        idGenerated:(state,action)=>{
            state.userId=action.payload
        }
    }
})

export default userDataSlice.reducer
export const {tokenGenerated,idGenerated} =userDataSlice.actions