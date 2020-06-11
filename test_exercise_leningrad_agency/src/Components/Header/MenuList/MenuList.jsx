import style from "../Header.module.sass";
import React from "react";
import {NavLink} from "react-router-dom";

let MenuList = (props) => {
    return (
        <ul className={style.nav__list + (props.isOpen ? " " + style.active : "")}>

            <li className={style.nav__item}>
                <NavLink className={style.nav__link} activeClassName={style.nav__link_active} to="/" exact>О компании</NavLink>
            </li>
            <li className={style.nav__item}>
                <NavLink className={style.nav__link} activeClassName={style.nav__link_active} to="/uslugi" exact>Услуги</NavLink>
            </li>
            <li className={style.nav__item}>
                <NavLink className={style.nav__link} activeClassName={style.nav__link_active} to="/about-product" exact>О продукте</NavLink>
            </li>
            <li className={style.nav__item}>
                <NavLink className={style.nav__link} activeClassName={style.nav__link_active} to="/contactyi" exact>Контакты</NavLink>
            </li>

        </ul>
    )
}

export default MenuList;