import { combineReducers, createStore } from "redux";
// reducer imports

import TodoReducers from "./reducers/TodoReducers";
const reducers = combineReducers({todo: TodoReducers});
const store = createStore(reducers);
export default store;