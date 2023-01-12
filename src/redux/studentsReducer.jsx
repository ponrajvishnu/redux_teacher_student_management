import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentsData: [
        {
            firstName: "Ram",
            lastName: "Kumar",
            email: "ramkumar@gmail.com",
            mentor: "teacher1"
        },
        {
            firstName: "Selva",
            lastName: "Venkatesh",
            email: "selva@gmail.com",
            mentor: "teacher2"
        },
        {
            firstName: "Vasanth",
            lastName: "Rajan",
            email: "vasanthrajan@gmail.com",
            mentor: ""
        },
        {
            firstName: "Praveen",
            lastName: "Muthu",
            email: "praveenmuthu@gmail.com",
            mentor: ""
        }
    ]
};

export const studentsReducer = createSlice({
    name : 'students',
    initialState,
    reducer: {
        addStudent: (state,action) => {
            state.studentsData.push(action.payload);
        },
        editStudent: (state,action) => {
            state.studentsData.splice(action.payload.index, 1 ,action.payload.data);
        },
        deleteStudent: (state,action) => {
            state.studentsData.splice(action.payload.index,1);
            //console.log('click');
        }
    }
})

export const {addStudent,editStudent,deleteStudent} = studentsReducer.actions
export default studentsReducer.reducer