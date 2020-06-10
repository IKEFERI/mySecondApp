import style from "./Header.module.sass";
import logo from "../../logo.svg";
import React, {useEffect} from "react";


let Header = (props) => {

    let onBurgerClick = (e) => {
        e.preventDefault();
        if (props.isOpen){
            props.closeMenu();
        } else {
            props.openMenu();
        }
    }
    useEffect(() => {

    })

    return(
        <header className={style.header}>
            <div className={style.logo__wrapper + " " + style.logo__wrapper_pc}>
                <img src={logo} className={style.logo} alt="logo"/>
            </div>
            <nav className={style.nav}>

                <div className={style.nav__mobile}>
                    <div className={style.logo__wrapper + " " + style.logo__wrapper_mobile}>
                        <img src={logo} className={style.logo} alt="logo"/>
                    </div>
                    <a href="#" onClick={onBurgerClick} className={style.menuButton  + (props.isOpen ? " " + style.isActive : "")} id="menuButton">
                        <span className={style.burgerIcon}> </span>
                    </a>
                </div>

                <ul className={style.nav__list + (props.isOpen ? " " + style.active : "")}>
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