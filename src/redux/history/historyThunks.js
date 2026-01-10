import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchHistory = createAsyncThunk("history/fetchHistory", async (_, thunkAPI)=>{
    try{
        // const res = await fetch("http://localhost:4000/api/task");
        const res = await fetch("https://timerbackend-l0bs.onrender.com/api/task");
        const data = await res.json();
        if (!res.ok) {
            const errorMessage = await data.error; // if backend sends JSON
            return thunkAPI.rejectWithValue(errorMessage || "Failed to load history");
          }
        return data.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
});

const addHistory = createAsyncThunk("history/addHistory", async ({newHistoryObject, tempId}, thunkAPI)=>{ // TO UNDERSTAND THE ARGUMENT STRUCTURE, REFER THE DISPATCH IN App.js
    try{
        let response = await fetch(
          "https://timerbackend-l0bs.onrender.com/api/task",
          {
            method : "POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body : JSON.stringify(newHistoryObject)
          });
        if(!response.ok){
          const errorMessage = await response.json().error;
          return thunkAPI.rejectWithValue(errorMessage || "Failed to add history")
        }
        let data = await response.json();
        return {data, tempId};
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});

export {fetchHistory, addHistory}