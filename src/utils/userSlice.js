import { createSlice } from "@reduxjs/toolkit";
//import { removeUser } from "../utils/userSlice"; // Adjust path as needed

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) =>{
            return action.payload;
        },
        removeUser: () =>{
            return null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;