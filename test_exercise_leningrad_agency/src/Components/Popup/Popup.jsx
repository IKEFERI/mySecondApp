import style from "./Popup.module.sass";
import React from "react";
import * as axios from "axios";
import PopupFormNotice from "./PopupFormNotice";

// huh how do you like this. Elon Musk?
class Popup extends React.Component {

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
        this.props.startSendingForm();
        this.props.onSendForm();
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.props.startSendingForm) {
            if (this.props.formSended) {
                alert("Вы уже отправили заявку, спасибо!")
            } else {
                if (this.props.formIsValid) {

                    console.log("Form is valid and the request will be sent.");

                    axios.post('mail.php', this.props.formData).then(response => {

                        console.log("Request has been sended and response success received from server");


                        this.props.onSendSuccess();
                        this.props.afterSendForm();

                        // alert("Спасибо! Наш менеджер, скоро вам перезвонит. " + response);
                        setTimeout(this.noticeHide, 3000);
                    })
                        .catch(error => {

                            console.log("Request has been sended, but response failed");


                            this.props.onSendFailed();
                            this.props.afterSendForm();
                            // alert("Извините! Наш менеджер, вам не перезвонит. Попробуйте отправить еще раз! " + error);
                            setTimeout(this.noticeHide, 3000);
                        });
                } else {
                    alert("Заполните все поля корректно!")
                }
            }
        }
    }


    onMailInputText = (e) => {
        let text = e.target.value;
        this.props.onMailInputText(text);
    }
    onPhoneInputText = (e) => {
        let text = e.target.value;
        this.props.onPhoneInputText(text);
    }
    onNameInputText = (e) => {
        let text = e.target.value;
        this.props.onNameInputText(text);
    }
    onOpenClosePopup = (e) => {
        e.preventDefault();
        this.props.onOpenClosePopup();
    }
    onFocusPhone = () => {
        this.props.onFocusPhone();
    }
    onFocusName = () => {
        this.props.onFocusName();
    }
    onFocusMail = () => {
        this.props.onFocusMail();
    }

    noticeHide = () => {
        this.props.noticeHide();
    }

    noticeVisible = () => {
        if (this.props.sendSuccess) {
            return <PopupFormNotice text={"Спасибо, форма отправлена. Ожидайте звонок менеджера!"} success={true}/>
        } else if (this.props.sendFailed) {
            return <PopupFormNotice text={"Извините, форма не была отправлена. Попытайтесь снова!"} success={false}/>
        }
    }

    onClickOutsideHandler = (e) => {
        if (this.props.popupIsOpen && !this.pForm.current.contains(e.target)) {
            this.props.onOpenClosePopup();
        }
    }

    render() {
        return (
            <div ref={this.pContainer} className={style.popup + " " + (this.props.popupIsOpen && style.active)}>
                <div ref={this.pForm} className={style.popup__inner}>
                    <a onClick={this.onOpenClosePopup} className={style.popup__close} href="#">X</a>
                    <form className={style.form} onSubmit={this.onSubmitForm}>

                        {this.noticeVisible()}

                        <fieldset className={style.form__fieldset}>
                            <legend className={style.form__legend}>Контактная информация</legend>

                            <input onFocus={this.onFocusName} onChange={this.onNameInputText}
                                   className={style.form__textInput + " " + (this.props.nameFocus ? (this.props.nameIsValid ? style.valid : style.invalid) : "")}
                                   value={this.props.nameText}
                                   type="text" placeholder="Ваше полное имя..."/>

                            <input onFocus={this.onFocusMail} onChange={this.onMailInputText}
                                   className={style.form__textInput + " " + (this.props.mailFocus ? (this.props.mailIsValid ? style.valid : style.invalid) : "")}
                                   value={this.props.mailText}
                                   type="email" placeholder="Ваша электронная почта..."/>

                            <input onFocus={this.onFocusPhone} onChange={this.onPhoneInputText}
                                   className={style.form__textInput + " " + (this.props.phoneFocus ? (this.props.phoneIsValid ? style.valid : style.invalid) : "")}
                                   value={this.props.phoneText}
                                   type="tel" placeholder="Ваш телефон..."/>
                        </fieldset>

                        <button onClick={this.onUserSendForm} className={style.button + " " + style.form__button}
                                type="submit">Отправить
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Popup;


