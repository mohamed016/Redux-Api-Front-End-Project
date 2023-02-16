import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from 'react-redux';
//start
//success
//error
export const addUserWithCreateAsyncThunk = createAsyncThunk('add/user', async (user) => {
    const { data } = await axios.post("https://redux-api-back-end-project.onrender.com/api/users", user)
    return data;
})


const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {
            name: "",
            email: ""
        },

        loading: null,
        error: false,
    },
    reducers: {
        addUserWithDefault: (state, action) => {
            state.userData = action.payload;
            console.log(action.payload.name)
        },
        start: (state) => {
            state.loading = true;
        },
        success: (state, action) => {
            state.loading = null;
            state.userData = action.payload

        },
        error: (state) => {
            state.loading = false
        }
    },
    extraReducers: {
        [addUserWithCreateAsyncThunk.pending]: (state) => {
            state.loading = true;
        },
        [addUserWithCreateAsyncThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loading = null;
            state.userData = action.payload
        },
        [addUserWithCreateAsyncThunk.rejected]: (state) => {
            console.log("k;l;l")
            state.loading = false
        }
    }

})
export const { addUserWithDefault, start, success, error } = userSlice.actions
export default userSlice.reducer