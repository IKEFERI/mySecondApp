import React from 'react';
import logo from './logo.svg';
// import './App.css';
import style from './App.module.sass'
import TCarousel from "./Components/Carousel";

function App() {
    return (
        <div className={style.appContainer}>

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
            <main className={style.main}>
                <article>

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
                        <a href="#popup" className={style.button}>Купить продукт</a>
                    </header>


                    <section className={style.testimonials}>
                        <h2 className={style.h2}>Отзывы наших покупателей</h2>

                        <div className={style.carousel + " " + style.testimonials__carousel}>

                            <TCarousel/>

                        </div>

                    </section>

                    <section className={style.workingHours}>
                        <h2 className={style.h2}>Часы работы</h2>


                        <table className={style.table}>
                            <tbody>
                            <tr className={style.tr}>
                                <td className={style.td}>ПН-ПТ</td>
                                <td className={style.td}>10-18</td>
                            </tr>
                            <tr className={style.tr}>
                                <td className={style.td}>СБ</td>
                                <td className={style.td}>10-16</td>
                            </tr>
                            <tr className={style.tr}>
                                <td className={style.td}>ВС</td>
                                <td className={style.td}>12-16</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                </article>
            </main>
            <footer className={style.footer}>
                <nav className={style.nav + " " + style.footer__nav}>
                    <a className={style.nav__link + " " + style.footer__nav__link} href="tel:+79999999999">+7 (999)
                        999-99-99</a>
                </nav>
            </footer>

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
        </div>
    );
}

export default App;
