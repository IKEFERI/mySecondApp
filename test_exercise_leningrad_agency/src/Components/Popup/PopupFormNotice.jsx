import style from "./Popup.module.sass";
import React from "react";

let PopupFormNotice = (props) => {
    return (
        <div className={style.form__notice + ( props.success ? " " + style.form__notice_success : " " + style.form__notice_failed)}> <span>{props.text}</span> </div>
    )
}

export default PopupFormNotice;