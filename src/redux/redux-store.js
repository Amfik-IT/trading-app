import {combineReducers, createStore} from "redux";
import tablesReducer from "./tables-reducer";
import operationsReducer from "./operations-reducer";

let reducers = combineReducers({
    operations: operationsReducer,
    tablesPage: tablesReducer,
});

let store = createStore(reducers);

window.store = store; // для дебага

export default store;