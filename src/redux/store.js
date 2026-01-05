// third party imports
import { configureStore } from "@reduxjs/toolkit";

// local imports
import historyReducer from "./history/historySlice.js";

const store = configureStore({
    reducer:{
        history : historyReducer
    }
});

export default store;