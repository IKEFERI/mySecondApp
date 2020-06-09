import style from "../../App.module.sass";
import logo from "../../logo.svg";
import React from "react";


let Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo__wrapper + " " + style.header__logo__wrapper}>
                <img src={logo} className={style.logo} alt="logo"/>
            </div>
            <nav className={style.nav}>
                <ul className={style.nav__list}>
                    <li className={style.nav__item}><a className={style.nav__link + " " + style.nav__link_active}
                                                       href="#">О компании</a></li>
                    <li className={style.nav__item}><a className={style.nav__link} href="#">Услуги</a></li>
                    <li className={style.nav__item}><a className={style.nav__link} href="#">О продукте</a></li>
                    <li className={style.nav__item}><a className={style.nav__link} href="#">Контакты</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;