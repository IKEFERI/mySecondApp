import style from "./Popup.module.sass";
import React from "react";
import * as axios from "axios";


class Popup extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        console.log("component did mount, form reset, and ready to use... in my dreams");
    }

    componentDidUpdate = () => {  // huh how do you this Elon Musk?

        if (this.props.startSendingForm) {
            if (this.props.formSended) {
                alert("Вы уже отправили заявку, спасибо!")
            } else {
                if (this.props.formIsValid) {

                    console.log("Form is valid and the request will be sent.");

                    axios.post('mail.php', this.props.formData).then(response => {

                        console.log("Request has been sended and response success received from server");

                        this.props.afterSendForm();
                        this.props.sendSuccess();
                        alert("Спасибо! Наш менеджер, скоро вам перезвонит. " + response);

                    })
                        .catch(error => {

                            console.log("Request has been sended, but response failed");

                            this.props.afterSendForm();
                            this.props.sendFailed();
                            alert("Извините! Наш менеджер, вам не перезвонит. Попробуйте отправить еще раз! " + error);
                        });
                }
            }
        }
    }

    onSendForm = (e) => {
        e.preventDefault();
        this.props.onSendForm();
    }
    startSendingForm = () => {
        this.props.startSendingForm();
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
        console.log(this.props.popupIsOpen)
        this.props.onOpenClosePopup()
    }
    onFocusPhone = () => {
        this.props.onFocusPhone()
    }
    onFocusName = () => {
        this.props.onFocusName()
    }
    onFocusMail = () => {
        this.props.onFocusMail()
    }


    render() {
        return (
            <div className={style.popup + (this.props.popupIsOpen ? " " + style.active : "")}>
                <div className={style.popup__inner}>
                    <a onClick={this.onOpenClosePopup} className={style.popup__close} href="#">X</a>
                    <form className={style.form} onSubmit={this.onSendForm}>


                        <div className={style.form__notice + " " + style.form__notice_success}> <span>Спасибо, форма отправлена. Ожидайте звонок менеджера!</span> </div>
                        <div className={style.form__notice + " " + style.form__notice_failed}> <span>Извините, форма не была отправлена. Попытайтесь снова!</span> </div>


                        <fieldset className={style.form__fieldset}>
                            <legend className={style.form__legend}>Контактная информация</legend>

                            <input onFocus={this.onFocusName} onChange={this.onNameInputText}
                                   className={style.form__textInput + (this.props.nameFocus ? this.props.nameIsValid ? " " + style.valid : " " + style.invalid : '')}
                                   value={this.props.nameText}
                                   type="text" placeholder="Ваше полное имя..."/>

                            <input onFocus={this.onFocusMail} onChange={this.onMailInputText}
                                   className={style.form__textInput + (this.props.mailFocus ? this.props.mailIsValid ? " " + style.valid : " " + style.invalid : '')}
                                   value={this.props.mailText}
                                   type="email" placeholder="Ваша электронная почта..."/>

                            <input onFocus={this.onFocusPhone} onChange={this.onPhoneInputText}
                                   className={style.form__textInput + (this.props.phoneFocus ? this.props.phoneIsValid ? " " + style.valid : " " + style.invalid : '')}
                                   value={this.props.phoneText}
                                   type="tel" placeholder="Ваш телефон..."/>

                        </fieldset>

                        <button onClick={this.startSendingForm} className={style.button + " " + style.form__button}
                                type="submit">Отправить
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Popup;


