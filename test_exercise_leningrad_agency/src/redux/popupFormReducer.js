import React from "react";

const openClosePopup = "OPEN_CLOSE_POPUP";
const nameInputText = "NAME_INPUT_TEXT";
const mailInputText = "MAIL_INPUT_TEXT";
const phoneInputText = "PHONE_INPUT_TEXT";
const sendForm = "SEND_FORM";
const clearState = "CLEAR_STATE";
const sendSuccess = "SEND_SUCCESS";
const sendFailed = "SEND_FAILED";
const startSendingForm = "START_SENDING_FORM";
const focusPhone = "FOCUS_PHONE";
const focusMail = "FOCUS_MAIL";
const focusName = "FOCUS_NAME";
const noticeHide = "NOTICE_HIDE";

let initState = {
    popupIsOpen: false,
    nameText: '',
    mailText: '',
    phoneText: '',
    nameFocused: false,
    mailFocused: false,
    phoneFocused: false,
    nameIsValid: false,
    mailIsValid: false,
    phoneIsValid: false,
    formSended: false,
    sendSuccess: false,
    sendFailed: false,
    startSendingForm: false,
    formIsValid: false,
    formData: {
        name: '',
        mail: '',
        phone: '',
        lander: '',
        form: ''
    }
}

const popupFormReduser = (state = initState, action) => {
    let reg;
    switch (action.type) {
        case "OPEN_CLOSE_POPUP":
            if (state.popupIsOpen) {
                return {
                    ...state,
                    popupIsOpen: false
                }
            } else {

                return {
                    ...state,
                    popupIsOpen: true
                }
            }
        case "NAME_INPUT_TEXT":
            reg = /[^A-z-А-я]/g;
            if (!reg.test(action.value) && action.value) {
                return {
                    ...state,
                    nameIsValid: true,
                    nameText: action.value

                }
            } else {
                console.log('invalid');
                return {
                    ...state,
                    nameIsValid: false,
                    nameText: action.value
                }
            }

        case "PHONE_INPUT_TEXT":
            reg = /[^+0-9?]/g;
            if (!reg.test(action.value) && action.value) {
                return {
                    ...state,
                    phoneIsValid: true,
                    phoneText: action.value
                }
            } else {
                console.log('invalid');
                return {
                    ...state,
                    phoneIsValid: false,
                    phoneText: action.value
                }
            }

        case "MAIL_INPUT_TEXT":
            reg = /.+@.+\..+/i;
            if (action.value.match(reg) && action.value) {
                return {
                    ...state,
                    mailIsValid: true,
                    mailText: action.value
                }
            } else {
                return {
                    ...state,
                    mailIsValid: false,
                    mailText: action.value
                }
            }

        case "START_SENDING_FORM":
            return {
                ...state,
                startSendingForm: true,
                nameFocused: true,
                mailFocused: true,
                phoneFocused: true
            }
        case "SEND_FORM":
            if (state.mailIsValid && state.phoneIsValid && state.nameIsValid) {
                return {
                    ...state,
                    formData: {
                        name: state.nameText,
                        mail: state.mailText,
                        phone: state.phoneText,
                        lander: state.lander,
                        form: state.form
                    },
                    formIsValid: true
                }
            } else {
                return {...state, formIsValid: false}
            }
        case "CLEAR_STATE":
            return {
                ...state,
                formData: {
                    name: '',
                    mail: '',
                    phone: '',
                    lander: '',
                    form: ''
                },
                startSendingForm: true,
                formIsValid: false
            }
        case "SEND_SUCCESS":
            //запустим после успешной отправки
            return {
                ...state,
                nameText: '',
                phoneText: '',
                mailText: '',
                sendSuccess: true,
                formSended: true
            }
        case "SEND_FAILED":
            //запустим после успешной отправки
            return {
                ...state,
                formSended: false,
                sendFailed: true,
            }
        case "FOCUS_NAME":
            return {
                ...state,
                nameFocused: true
            }
        case "FOCUS_MAIL":
            return {
                ...state,
                mailFocused: true
            }
        case "FOCUS_PHONE":
            return {
                ...state,
                phoneFocused: true
            }
        case "NOTICE_HIDE":
            return {
                ...state,
                sendSuccess: false,
                sendFailed: false,

            }
        default:
            return state;

    }

}

export const openClosePopupAC = () => ({type: openClosePopup});
export const nameInputTextAC = (val) => ({type: nameInputText, value: val});
export const mailInputTextAC = (val) => ({type: mailInputText, value: val});
export const phoneInputTextAC = (val) => ({type: phoneInputText, value: val});
export const sendFormAC = () => ({type: sendForm});
export const clearStateAC = () => ({type: clearState});
export const sendSuccessAC = () => ({type: sendSuccess});
export const sendFailedAC = () => ({type: sendFailed});
export const startSendingFormAC = () => ({type: startSendingForm});
export const focusPhoneAC = () => ({type: focusPhone});
export const focusNameAC = () => ({type: focusName});
export const focusMailAC = () => ({type: focusMail});
export const noticeHideAC = () => ({type: noticeHide})

export default popupFormReduser;