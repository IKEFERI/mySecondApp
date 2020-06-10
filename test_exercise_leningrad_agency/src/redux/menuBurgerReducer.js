import React from "react";

const openMenu = "OPEN_MENU";
const closeMenu = "ClOSE_MENU";

let initState = {
    isOpen: false
}

const menuBurgerReducer = (state = initState, action) => {
    switch (action.type) {
        case "OPEN_MENU":
            return {
                ...state,
                isOpen: true
            }
        case "ClOSE_MENU":
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
}

export const openMenuAC = () => ({type: openMenu});
export const closeMenuAC = () => ({type: closeMenu});
export default menuBurgerReducer;