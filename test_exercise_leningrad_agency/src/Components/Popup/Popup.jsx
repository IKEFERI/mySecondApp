import style from "../../App.module.sass";
import React from "react";

let Popup = () =>{
    return(
        <div className={style.popup}>
            <div className={style.popup__inner}>
                <form className={style.form} action="">
                    <fieldset className={style.form__fieldset} >
                        <legend className={style.form__legend}>Контактная информация</legend>
                        <input className={style.form__textInput} type="text" placeholder="Ваше полное имя..."/>
                        <input className={style.form__textInput} type="mail" placeholder="Ваша электронная почта..."/>
                        <input className={style.form__textInput} type="tel" placeholder="Ваш телефон..."/>
                    </fieldset>
                    <button className={style.button + " " + style.form__button} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Popup;


