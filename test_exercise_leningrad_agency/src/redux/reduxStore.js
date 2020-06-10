import {combineReducers, createStore} from "redux";
import popupFormReduser from "./popupFormReducer";


let reducers = combineReducers({
    PopupForm: popupFormReduser
})
let store = createStore(reducers);

export default store;