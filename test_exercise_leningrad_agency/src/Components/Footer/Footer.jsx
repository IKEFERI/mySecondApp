import style from "../../App.module.sass";
import React from "react";


let Footer = () => {
    return (
        <footer className={style.footer}>
            <nav className={style.nav + " " + style.footer__nav}>
                <a className={style.nav__link + " " + style.footer__nav__link} href="tel:+79999999999">+7 (999)
                    999-99-99</a>
            </nav>
        </footer>
    )

}

export default Footer;
