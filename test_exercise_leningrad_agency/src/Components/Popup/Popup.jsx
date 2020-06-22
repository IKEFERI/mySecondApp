import style from "./Popup.module.sass";
import React from "react";
import PopupFormNotice from "./PopupFormNotice";


let Popup = (props) => {

    return (
        <div ref={props.pContainer} className={style.popup + " " + (props.popupIsOpen && style.active)}>
            <div ref={props.pForm} className={style.popup__inner}>
                <a onClick={props.onOpenClosePopup} className={style.popup__close} href="#">X</a>
                <form className={style.form} onSubmit={props.onSubmitForm}>

                    {props.notifyIsVisible ?
                        props.formIsSended ?
                            <PopupFormNotice
                                text={"Спасибо, форма отправлена. Ожидайте звонок менеджера!"}
                                success={true}/>
                            : <PopupFormNotice
                                text={"Извините, форма не была отправлена. Попытайтесь снова!"}
                                success={false}/>
                        : null}

                    <fieldset className={style.form__fieldset}>
                        <legend className={style.form__legend}>Контактная информация</legend>

                        <input onFocus={props.onFocus} onChange={props.onInput}
                               name={"fullname"}
                               className={style.form__textInput + " " + (props.nameFocus ? (props.nameIsValid ? style.valid : style.invalid) : "")}
                               value={props.nameText}
                               type="text" placeholder="Ваше полное имя..."/>

                        <input onFocus={props.onFocus} onChange={props.onInput}
                               name={"mail"}
                               className={style.form__textInput + " " + (props.mailFocus ? (props.mailIsValid ? style.valid : style.invalid) : "")}
                               value={props.mailText}
                               type="email" placeholder="Ваша электронная почта..."/>

                        <input onFocus={props.onFocus} onChange={props.onInput}
                               name={"phone"}
                               className={style.form__textInput + " " + (props.phoneFocus ? (props.phoneIsValid ? style.valid : style.invalid) : "")}
                               value={props.phoneText}
                               type="tel" placeholder="Ваш телефон..."/>
                    </fieldset>

                    <button onClick={props.onUserSendForm} className={style.button + " " + style.form__button}
                            type="submit">Отправить
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Popup;


