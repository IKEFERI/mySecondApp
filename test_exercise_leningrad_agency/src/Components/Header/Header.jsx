import style from "./Header.module.sass";
import logo from "../../logo.svg";
import React from "react";
import MenuList from "./MenuList/MenuList";


let Header = (props) => {

    let onBurgerClick = (e) => {
        e.preventDefault();
        if (props.isOpen){
            props.closeMenu();
        } else {
            props.openMenu();
        }
    }
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

                <MenuList isOpen={props.isOpen}/>

            </nav>
        </header>
    )
}

export default Header;