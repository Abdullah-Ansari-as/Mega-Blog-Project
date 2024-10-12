import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, 
    UserData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.UserData = action.payload.UserData;
        },

        logout: (state) => {
            state.status = false;
            state.UserData = null;
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

