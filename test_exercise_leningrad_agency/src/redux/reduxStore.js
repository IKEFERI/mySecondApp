import {combineReducers, createStore} from "redux";
import popupFormReduser from "./popupFormReducer";
import menuBurgerReducer from "./menuBurgerReducer";


let reducers = combineReducers({
    PopupForm: popupFormReduser,
    BurgerMenu: menuBurgerReducer
})
let store = createStore(reducers);

export default store;