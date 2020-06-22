import React from "react";
import {connect} from "react-redux";
import {openClosePopup} from "../../../redux/popupFormReducer";
import PopupOpenButton from "./PopupOpenButton";

let mapStateToProps = (state) => {
    return { }
}

const PopupOpenButtonContainer = connect(mapStateToProps,{openClosePopup})(PopupOpenButton);

export default PopupOpenButtonContainer;