import { configureStore } from "@reduxjs/toolkit";
import dishFormReducer from "./features/dishFormSlice.js";
import signInReducer from "./features/signInSlice.js"
import signUpFormReducer from "./features/signUpFormSlice.js";

export const store = configureStore({
    reducer:{
        dishForm: dishFormReducer,
        signIn: signInReducer,
        signUpform : signUpFormReducer,
    },
})