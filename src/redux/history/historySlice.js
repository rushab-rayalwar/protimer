// third party imports
import { createSlice } from "@reduxjs/toolkit";

// local imports
import { fetchHistory } from "./historyThunks.js";

const initialState = {
    data : [],
    loading : false,
    error : null
}

const historySlice = createSlice({
    name:"history",
    initialState,
    reducers : {
    },
    extraReducers : (builder)=>{
        builder
            .addCase(fetchHistory.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHistory.fulfilled, (state, action)=>{
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchHistory.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default historySlice.reducer;