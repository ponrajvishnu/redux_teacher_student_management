import { createSlice } from "@reduxjs/toolkit";

export const teachersReducer = createSlice({
    name: 'teachers',
    initialState: {
        teachersData :[
            {
                mentorName : "Ashok Kumar",
                Mobile  : "9191919191",
                Email : "ashokkumar@gmail.com",
                Students : ""
            },
            {
                mentorName : "Raja Guru",
                Mobile  : "9191919191",
                Email : "rajaguru@gmail.com",
                Students : ""
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