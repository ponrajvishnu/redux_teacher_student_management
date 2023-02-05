import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentsData: [
        {
            studentName: "Kumar",
            email: "kumar@gmail.com",
            mentor: ""
        },
        {
            studentName: "Selva",
            email: "selva@gmail.com",
            mentor: ""
        },
        {
            studentName: "Vasanth",
            email: "vasanthrajan@gmail.com",
            mentor: ""
        },
        {
            studentName: "Praveen",
            email: "praveenmuthu@gmail.com",
            mentor: ""
        }
    ]
};

export const studentsReducer = createSlice({
    name : 'students',
    initialState,
    reducers : {
        addStudent: (state,action) => {
            state.studentsData.push(action.payload);
        },
        editStudent: (state,action) => {
            state.studentsData.splice(action.payload.index, 1 ,action.payload.data);
        },
        deleteStudent: (state,action) => {
            state.studentsData.splice(action.payload.index,1);
        }
    }
})

export const {addStudent,editStudent,deleteStudent} = studentsReducer.actions
export default studentsReducer.reducer