import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    token: "",
    loading: false,
    error: false,
    msg: ""
}

export const registerUser = createAsyncThunk('registerUser', async(body) => {
    const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    return await res.json()
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true
        },
        [registerUser.fulfilled]: (state, { payload: { error, token } }) => {
            state.loading = false
            if(error){
                state.error = true
            } else {
                state.token = token
                state.error = false
            }
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = true
        },
    }
})

export default authSlice.reducer