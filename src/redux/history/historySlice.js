// third party imports
import { createSlice } from "@reduxjs/toolkit";

// local imports
import { fetchHistory, addHistory } from "./historyThunks.js";

const initialState = {
    data : [],
    loading : false,
    error : null
}

const historySlice = createSlice({
    name:"history",
    initialState,
    reducers : {
        addTaskOptimistic : (state,action)=>{
            state.data.unshift(action.payload)
            state.loading = false;
        }
    },
    extraReducers : (builder)=>{
        builder
            .addCase(fetchHistory.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHistory.fulfilled, (state, action)=>{
                state.loading = false;
                state.data = action.payload.map(d=>{
                    return {...d, optimistic:false}
                });                                                 // NOTE THIS : the optimistic flag is added to manage race conditions that surface when data that has not been updated on the server is to be updated
                state.error = null;
            })
            .addCase(fetchHistory.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(addHistory.fulfilled,(state, action)=>{
                state.data = state.data.map(d=>{
                    if(d._id === action.payload.tempId){
                        return action.payload.data;
                    }
                    return d;
                });
                state.error = null;
                state.loading = false;
                console.log("replaced optimistic object in the state");
            })
            .addCase(addHistory.pending, (state, action)=>{
                state.error = null;
            }) 
            .addCase(addHistory.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const {addTaskOptimistic} = historySlice.actions;
export default historySlice.reducer;