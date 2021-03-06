import React from "react";
import {serverAPI} from "../api/api";

const OPEN_CLOSE_POPUP = "OPEN_CLOSE_POPUP";
const INPUT_TEXT = "INPUT_TEXT"
const SEND_FORM = "SEND_FORM";
const IS_SENDED = "IS_SENDED";
const FOCUS_FIELD = "FOCUS_FIELD";
const NOTIFY_VISIBLE = "NOTIFY_VISIBLE";

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
    formIsSended: false,
    isFetch: false,
    formIsValid: false,
    notifyIsVisible: false,
    formData: {
        name: '',
        mail: '',
        phone: '',
        lander: '',
        form: ''
    }
}

const popupFormReduser = (state = initState, action) => {

    const isFullname = action.name === "fullname";
    const isPhone = action.name === "phone";
    const isMail = action.name === "mail";

    switch (action.type) {
        case OPEN_CLOSE_POPUP:
            return {
                ...state,
                popupIsOpen: !state.popupIsOpen
            }
        case INPUT_TEXT:
            let regN = /[^A-z-А-я]/g;
            let regP = /[^+0-9?]/g;
            let regM = /.+@.+\..+/i;
            let value = action.value;
            //action.name
            return {
                ...state,

                nameIsValid: (isFullname && value) ? !regN.test(value) : (isFullname ? false : state.nameIsValid),
                nameText: isFullname ? value : state.nameText,

                phoneIsValid: (isPhone && value) ? !regP.test(value) : (isPhone ? false : state.phoneIsValid),
                phoneText: isPhone ? value : state.phoneText,

                mailIsValid: (isMail && value) ? value.match(regM) : (isMail ? false : state.mailIsValid),
                mailText: isMail ? value : state.mailText,
            }
        case FOCUS_FIELD:
            return {
                ...state,
                nameFocused: isFullname ? true : state.nameFocused,
                mailFocused: isMail ? true : state.mailFocused,
                phoneFocused: isPhone ? true : state.phoneFocused
            }

        case SEND_FORM:
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
                    isFetch: true,
                    formIsValid: true
                }
            } else {
                return {
                    ...state,
                    formIsValid: false,
                    nameFocused: true,
                    mailFocused: true,
                    phoneFocused: true
                }
            }
        case IS_SENDED:
            return action.value ?
                {
                    ...state,
                    nameText: '',
                    phoneText: '',
                    mailText: '',
                    formData: {name: '', mail: '', phone: '', lander: '', form: ''},
                    formIsSended: true,
                    isFetch: false,
                    formIsValid: false,
                    nameIsValid: false,
                    mailIsValid: false,
                    phoneIsValid: false
                } : {
                    ...state,
                    isFetch: false
                }
        case NOTIFY_VISIBLE:
            return {
                ...state,
                notifyIsVisible: action.value
            }
        default:
            return state;
    }

}

export const openClosePopup = () => ({type: OPEN_CLOSE_POPUP});
export const inputText = (val, name) => ({type: INPUT_TEXT, value: val, name});
export const sendForm = () => ({type: SEND_FORM});
export const isSended = (val) => ({type: IS_SENDED, value: val});
export const focusField = (name) => ({type: FOCUS_FIELD, name});
export const notifyVisible = (val) => ({type: NOTIFY_VISIBLE, value: val})

export const sendDataThunkCreator = (isFetch,formIsSended,formIsValid,formData) => {
    return (dispatch) => {
        if (isFetch) {
            if (formIsSended) {
                alert("Вы уже отправили заявку, спасибо!")
            } else {
                if (formIsValid) {
                    console.log("Form is valid and the request will be sent. " + formData);

                    serverAPI.sendData(formData).then(response => {
                        console.log("Request has been sended and response success received from server. " + response);
                        dispatch(isSended(true))

                        dispatch(notifyVisible(true))
                        setTimeout(() => dispatch(notifyVisible(false)), 3000);
                    })
                        .catch(error => {
                            console.log("Request has been sended, but response failed. " + error);
                            dispatch(isSended(false))

                            dispatch(notifyVisible(true))

                            setTimeout(() => dispatch(notifyVisible(false)), 3000);
                        });
                } else {
                    alert("Заполните все поля корректно!")
                }
            }
        }
    }
}


export default popupFormReduser;