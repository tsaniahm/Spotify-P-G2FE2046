import { createSlice } from "@reduxjs/toolkit";

export const AccesTokenSlice = createSlice({
    name: 'accessToken',
    initialState: {
        value: ''
    },
    reducers: {
        addAccessToken: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { addAccessToken } = AccesTokenSlice.actions;

export default AccesTokenSlice.reducer;