import React from "react";
import {connect} from "react-redux";
import Popup from "./Popup";
import { openClosePopup, inputText, isSended, sendForm, focusField } from "../../redux/popupFormReducer";
import {serverAPI} from "../../api/api";

// huh how do you like this. Elon Musk?
class PopupContainer extends React.Component {
    constructor(props) {
        super(props);
        this.pContainer = React.createRef();
        this.pForm = React.createRef();
    }
    componentDidMount = () => {
        console.log("component popup did mounted, form reset, and ready to use. And its all correctly... in my dreams");
    }
    componentDidUpdate = () => {
        if (this.props.popupIsOpen) {
            this.pContainer.current.addEventListener('click', this.onClickOutsideHandler);
        } else {
            this.pContainer.current.removeEventListener('click', this.onClickOutsideHandler);
        }
    }
    onUserSendForm = () => {
         this.props.sendForm();
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.props.isFetch) {
            if (this.props.formIsSended) {
                alert("Вы уже отправили заявку, спасибо!")
            } else {
                if (this.props.formIsValid) { console.log("Form is valid and the request will be sent.");
                    serverAPI.sendData(this.props.formData).then(response => {
                        console.log("Request has been sended and response success received from server. " + response);
                        setTimeout(()=>this.props.isSended(true), 3000);
                    })
                        .catch(error => { console.log("Request has been sended, but response failed. " + error);
                            setTimeout(()=>this.props.isSended(false), 3000);
                        });
                } else {
                    alert("Заполните все поля корректно!")
                }
            }
        }
    }

    onInput = (e) => {
        this.props.inputText(e.target.value, e.target.name);
    }
    onFocus = (e) => {
        this.props.focusField(e.target.name);
    }
    onOpenClosePopup = (e) => {
        e.preventDefault();
        this.props.openClosePopup();
    }
    onClickOutsideHandler = (e) => {
        if (this.props.popupIsOpen && !this.pForm.current.contains(e.target)) {
            this.props.openClosePopup();
        }
    }

    render() {
        return (<Popup
        pContainer={this.pContainer}
        popupIsOpen={this.props.popupIsOpen}
        pForm={this.pForm}
        onOpenClosePopup={this.onOpenClosePopup}
        onSubmitForm={this.onSubmitForm}
        isFetch={this.props.isFetch}
        formIsSended={this.props.formIsSended}
        onFocus={this.onFocus}
        onInput={this.onInput}
        nameFocus={this.props.nameFocus}
        nameIsValid={this.props.nameIsValid}
        nameText={this.props.nameText}
        mailFocus={this.props.mailFocus}
        mailIsValid={this.props.mailIsValid}
        mailText={this.props.mailText}
        phoneFocus={this.props.phoneFocus}
        phoneIsValid={this.props.phoneIsValid}
        phoneText={this.props.phoneText}
        onUserSendForm={this.onUserSendForm}
        />)
    }
}


let mapStateToProps = (state) => {
    let popupState = state.PopupForm;
    return {
        nameText: popupState.nameText,
        mailText: popupState.mailText,
        phoneText: popupState.phoneText,

        nameIsValid: popupState.nameIsValid,
        mailIsValid: popupState.mailIsValid,
        phoneIsValid: popupState.phoneIsValid,

        formIsSended: popupState.formIsSended,
        formIsValid: popupState.formIsValid,
        isFetch: popupState.isFetch,

        popupIsOpen: popupState.popupIsOpen,

        formData: popupState.formData,
        startSendingForm: popupState.formSending,

        nameFocus: popupState.nameFocused,
        mailFocus: popupState.mailFocused,
        phoneFocus: popupState.phoneFocused,

    }
}

export default connect(mapStateToProps, { openClosePopup, inputText, isSended, sendForm, focusField })(PopupContainer);