import {combineReducers, createStore} from "redux";
import operationsReducer from "./operations-reducer";

let reducers = combineReducers({
    operations: operationsReducer,
});

let store = createStore(reducers);

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

// @ts-ignore
window.store = store; // для дебага

export default store;