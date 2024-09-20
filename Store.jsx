import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";

import TodoReducers from "./slices/TodoSlices"

const reducers = combineReducers({todo: TodoReducers});

// const store = createStore(reducers);
const store = configureStore({
    reducer: {
        todo: TodoReducers
    },
    devTools:process.env.NODE_ENV !== 'production',
})


// export default store;

export default store;