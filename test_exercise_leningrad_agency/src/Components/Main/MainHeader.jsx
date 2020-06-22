import style from "./MainHeader.module.sass";
import React from "react";
import PopupOpenButtonContainer from "../common/PopupOpenButton/PopupOpenButtonContainer";


let MainHeader = () => {
    return (
        <header className={style.header + ' ' + style.main__header}>
            <h1 className={style.h1}>О компании</h1>
            <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut
                error illum placeat
                quis, voluptatibus! At aut, delectus,
                distinctio dolore dolores doloribus ipsum laborum magnam molestiae <b>nam qui recusandae
                    rerum?</b></p>
            <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi
                deleniti facilis fugit illo
                itaque iure veniam vitae. Aliquam maxime
                quidem voluptate! Alias deleniti doloremque nihil porro quibusdam sed, sit!</p>

            <p className={style.p}><strong className={style.strong}>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit! </strong></p>

            <PopupOpenButtonContainer/>

        </header>
    )
}
export default MainHeader;
