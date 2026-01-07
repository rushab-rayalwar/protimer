import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchHistory = createAsyncThunk("history/fetchHistory", async (_, thunkAPI)=>{
    try{
        const res = await fetch("http://localhost:4000/api/task");
        const data = await res.json();
        if (!res.ok) {
            const errorBody = await res.json(); // if backend sends JSON
            return thunkAPI.rejectWithValue({
              message: errorBody.message || "Request failed",
              status: res.status
            });
          }
        return data.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
})

export {fetchHistory}