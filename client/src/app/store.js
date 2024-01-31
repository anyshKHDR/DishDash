import { configureStore } from "@reduxjs/toolkit";
import dishFormReducer from "./features/dishFormSlice.js";

export const store = configureStore({
    reducer:{
        dishForm: dishFormReducer,
    },
})