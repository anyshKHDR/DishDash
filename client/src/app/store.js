import { configureStore } from "@reduxjs/toolkit";
import dishFormReducer from "./features/dishFormSlice.js";
import signInReducer from "./features/signInSlice.js"

export const store = configureStore({
    reducer:{
        dishForm: dishFormReducer,
        signIn: signInReducer,
    },
})