import style from "../../../App.module.sass";
import React from "react";


let PopupOpenButton = (props) => {

    let onOpenClosePopup = (e) => {
        e.preventDefault();
        props.openClosePopup();
    }
    return (
        <a href="#" onClick={onOpenClosePopup} className={style.button}>Купить продукт</a>
    )
}
export default PopupOpenButton;