import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/task-slice";

const store = configureStore({
    reducer: {
        tasks: taskSlice
    }
});


export default store;