import {combineReducers, createStore} from "redux";
import tablesReducer from "./tables-reducer";

let reducers = combineReducers({
    tablesPage: tablesReducer,
});

let store = createStore(reducers);

window.store = store; // для дебага

export default store;