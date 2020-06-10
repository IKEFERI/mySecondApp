import React from "react";
import {connect} from "react-redux";
import Popup from "./Popup";
import {
    mailInputTextAC,
    nameInputTextAC,
    openClosePopupAC,
    phoneInputTextAC, sendFailedAC,
    sendFormAC, startSendingFormAC, sendSuccessAC, clearStateAC, focusPhoneAC, focusNameAC, focusMailAC, noticeHideAC
} from "../../redux/popupFormReducer";


let mapStateToProps = (state) => {
    let popupState = state.PopupForm;
    return {
        nameText: popupState.nameText,
        mailText: popupState.mailText,
        phoneText: popupState.phoneText,
        nameIsValid: popupState.nameIsValid,
        mailIsValid: popupState.mailIsValid,
        phoneIsValid: popupState.phoneIsValid,
        formSended: popupState.formSended,
        formIsValid: popupState.formIsValid,
        popupIsOpen: popupState.popupIsOpen,
        formData: popupState.formData,
        startSendingForm: popupState.formSending,
        nameFocus: popupState.nameFocused,
        mailFocus: popupState.mailFocused,
        phoneFocus: popupState.phoneFocused,
        sendSuccess: popupState.sendSuccess,
        sendFailed: popupState.sendFailed,
    }


}
let mapDispatchToProps = (dispatch) => {
    return {
        onOpenClosePopup: () => { dispatch(openClosePopupAC()) },
        onMailInputText: (text) => {dispatch(mailInputTextAC(text))},
        onPhoneInputText: (text) => {dispatch(phoneInputTextAC(text))},
        onNameInputText: (text) => {dispatch(nameInputTextAC(text))},
        onSendForm: () => {dispatch(sendFormAC())},
        afterSendForm: () => {dispatch(clearStateAC())},
        onSendSuccess: () => {dispatch(sendSuccessAC())},
        onSendFailed: () => {dispatch(sendFailedAC())},
        startSendingForm: () => {dispatch(startSendingFormAC())},
        onFocusPhone: () => {dispatch(focusPhoneAC())},
        onFocusName: () => {dispatch(focusNameAC())},
        onFocusMail: () => {dispatch(focusMailAC())},
        noticeHide: () => {dispatch(noticeHideAC())}
    }
}


const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);

export default PopupContainer;