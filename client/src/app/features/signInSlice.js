import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const signInSlice = createSlice({
    name:"signIn",
    initialState,
    reducers:{
        showSignIn:(state)=>{
            state.value = true;
        },
        showSignUP:(state) =>{
            state.value = false
        }
    }
})

export const { showSignIn, showSignUP } = signInSlice.actions;
export default signInSlice.reducer;