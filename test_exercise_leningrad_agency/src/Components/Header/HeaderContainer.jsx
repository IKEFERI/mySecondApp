import React from "react";
import {connect} from "react-redux";
import {closeMenuAC, openMenuAC} from "../../redux/menuBurgerReducer";
import Header from "./Header";


let mapStateToProps = (state) => {
    return {
        isOpen: state.BurgerMenu.isOpen
    }


}
let mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => {dispatch(openMenuAC())},
        closeMenu: () => {dispatch(closeMenuAC())},
    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;