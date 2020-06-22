import React from "react";
import {connect} from "react-redux";
import Popup from "./Popup";
import {
    openClosePopup,
    inputText,
    isSended,
    sendForm,
    focusField,
    notifyVisible,
    sendDataThunkCreator
} from "../../redux/popupFormReducer";

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
        this.props.sendData(this.props.isFetch,this.props.formIsSended,this.props.formIsValid,this.props.formData);
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
        notifyIsVisible={this.props.notifyIsVisible}
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
        notifyIsVisible: popupState.notifyIsVisible

    }
}

export default connect(mapStateToProps, { openClosePopup, inputText, isSended, sendForm, focusField, notifyVisible, sendData: sendDataThunkCreator })(PopupContainer);