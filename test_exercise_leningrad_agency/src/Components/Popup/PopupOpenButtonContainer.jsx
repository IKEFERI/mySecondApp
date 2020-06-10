import React from "react";
import {connect} from "react-redux";
import {openClosePopupAC} from "../../redux/popupFormReducer";
import PopupOpenButton from "./PopupOpenButton";

let mapStateToProps = (state) => {
    return { }


}

let mapDispatchToProps = (dispatch) => {
    return {
        onOpenClosePopup: () => { dispatch(openClosePopupAC()) }
    }
}
const PopupOpenButtonContainer = connect(mapStateToProps,mapDispatchToProps)(PopupOpenButton);

export default PopupOpenButtonContainer;