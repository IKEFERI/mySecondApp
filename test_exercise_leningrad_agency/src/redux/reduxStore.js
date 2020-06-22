import {applyMiddleware, combineReducers, createStore} from "redux";
import popupFormReduser from "./popupFormReducer";
import menuBurgerReducer from "./menuBurgerReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    PopupForm: popupFormReduser,
    BurgerMenu: menuBurgerReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;