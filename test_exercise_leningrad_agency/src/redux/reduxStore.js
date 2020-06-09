import userReducer from "./userReducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    pUser: userReducer,
})
let store = createStore(reducers);

export default store;