import { createSlice } from "@reduxjs/toolkit";

export const teachersReducer = createSlice({
    name: 'teachers',
    initialState: {
        teachersData :[
            {
                firstName : "Teacher1",
                lastName : "T1",
                Mobile  : "9191919191",
                Email : "teacher1@gmail.com",
                Students : "Karthik,Kumar"
            },
            {
                firstName : "Teacher2",
                lastName : "T2",
                Mobile  : "9191919191",
                Email : "teacher2@gmail.com",
                Students : "Raj"
            }
        ]
    },
    reducers : {
        addTeacher: (state,action) => {
            state.teachersData.push(action.payload);
        },
        editTeacher: (state,action) => {
            state.teachersData.splice(action.payload.index, 1 ,action.payload.data);
        },
        deleteTeacher: (state,action) => {
            state.teachersData.splice(action.payload.index,1);
        }
    }
}) 

export const {addTeacher,editTeacher,deleteTeacher} = teachersReducer.actions
export default teachersReducer.reducer