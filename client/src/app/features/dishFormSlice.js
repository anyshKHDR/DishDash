import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:false,
}

const dishFormSlice = createSlice({
    name:"dishForm",
    initialState,
    reducers:{
        showForm: (state)=>{
            state.value = !state.value;
        }
    }
})

export const { showForm } = dishFormSlice.actions;
export default dishFormSlice.reducer;