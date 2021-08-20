import {combineReducers, createStore} from "redux";
import operationsReducer from "./operations-reducer";

let reducers = combineReducers({
    operations: operationsReducer,
});

let store = createStore(reducers);

window.store = store; // для дебага

export default store;