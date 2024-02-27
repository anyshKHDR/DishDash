import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:false
}

const signUpFormSlice = createSlice ({
    name:"signUpForm",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(formSubmitAsync.pending, ()=>{
            console.log("SignUp form submission pending")
        })
        .addCase(formSubmitAsync.fulfilled, ()=>{
            console.log("SignUp form submission success")
        })
        .addCase(formSubmitAsync.rejected, ()=>{
            console.log("Submission failed");
        })
    }

})

export const formSubmitAsync = createAsyncThunk (
    "signUpForm/formSubmitAsync",
    async (signUpData) =>{
        // console.log(signUpData);
        try{
            const response = await axios.post("http://localhost:3001/restaurant/owner/signup", signUpData);
            return response.data;
        }catch(error){
            console.error(error);
        }
    }
)

export default signUpFormSlice.reducer;