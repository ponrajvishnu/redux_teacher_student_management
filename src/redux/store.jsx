import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "./teachersReducer";
import studentsReducer from "./studentsReducer";

export const store = configureStore({
    reducer:{
        teachers: teachersReducer,
        students: studentsReducer
    }
});