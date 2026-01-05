import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchHistory = createAsyncThunk("history/fetchHistory", async (_, thunkAPI)=>{
    try{
        const res = await fetch("localhost:4000/api/task");
        const data = await res.json();
        return data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
})

export {fetchHistory}