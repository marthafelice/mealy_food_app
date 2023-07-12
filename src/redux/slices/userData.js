import { createSlice } from "@reduxjs/toolkit";
;

const initialState={
    userAccessToken:null,
    userId:null,
    user:{
        name:undefined,
        email:undefined,
        password:undefined,
    },
    userAddress:'',
    location2:[null,null]
}


export const  userDataSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
        tokenGenerated:(state,action)=>{ 
            state.userAccessToken=action.payload;
    
        },
        idGenerated:(state,action)=>{
            state.userId=action.payload;
        },
        Name:(state,action)=>{
            state.user.name=action.payload;
        },
        Email:(state,action)=>{
            state.user.email=action.payload;
        },
        Password:(state,action)=>{
            state.user.password=action.payload;
        },
        Address:(state,action)=>{
            state.userAddress=action.payload
        },
        Lat:(state,action)=>{
            state.location2[0]=action.payload
        },
        Long:(state,action)=>{
            state.location2[1]=action.payload
        }
    }
})

export default userDataSlice.reducer

export const { tokenGenerated, idGenerated, Name, Email, Password ,Address,Lat,Long} = userDataSlice.actions;

