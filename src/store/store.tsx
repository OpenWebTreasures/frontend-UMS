import { combineReducers } from "redux";
import systemReducer from "./reducers/system";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    system: systemReducer,
});

const store = configureStore({ reducer: rootReducer })


export default store;