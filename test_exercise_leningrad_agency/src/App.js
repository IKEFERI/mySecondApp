import React from 'react';
import logo from './logo.svg';
// import './App.css';
import style from './App.module.sass'

function App() {
    return (
        <div className="App">

            <header className={style.appHeader}>
                <img src={logo} className="App-logo" alt="logo"/>
                <nav>
                    <ul>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">О продукте</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <article>
                    <header>
                        <h1>О компании</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut error illum placeat
                            quis, voluptatibus! At aut, delectus,
                            distinctio dolore dolores doloribus ipsum laborum magnam molestiae <b>nam qui recusandae
                                rerum?</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi deleniti facilis fugit illo
                            itaque iure veniam vitae. Aliquam maxime
                            quidem voluptate! Alias deleniti doloremque nihil porro quibusdam sed, sit!</p>

                        <p><strong>Lorem ipsum dolor sit amet</strong></p>
                        <a href="#popup" className="button">Купить продукт</a>
                    </header>


                    <section className={style.testimonials}>
                        <h2>Отзывы наших покупателей</h2>

                        <a href="#" className="testimonialsCarousel">
                            <div className="testimonialsCarouselItem">
                                <div className="testimonialsCarouselItemImg">
                                    <div className="roundImg">
                                        <img src="" alt=""/>
                                    </div>
                                </div>
                                <div className="testimonialsCarouselItemBody">
                                    <div className="testimonialsCarouselItemBodyTitle">
                                        Roger Halfnight
                                    </div>

                                    <blockquote className="testimonialsCarouselItemBodyQuote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae corporis
                                        debitis
                                        explicabo minus nobis quidem? A adipisci
                                        deleniti doloribus inventore, itaque iure labore laudantium minus nostrum, nulla
                                        officia quia.
                                    </blockquote>

                                </div>
                            </div>
                        </a>

                    </section>
                    <section className={style.workingHours}>
                        <table>
                            <tbody>
                            <tr>
                                <td>ПН-ПТ</td>
                                <td>10-18</td>
                            </tr>
                            <tr>
                                <td>СБ</td>
                                <td>10-16</td>
                            </tr>
                            <tr>
                                <td>ВС</td>
                                <td>12-16</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </article>
            </main>


            <div className="popupContainer">
                <div className="popup">
                    <form action="">
                        <fieldset>
                            <legend>Контактная информация</legend>
                            <input type="text" placeholder="Ваше имя..."/>
                            <input type="mail" placeholder="Ваша почта..."/>
                            <input type="tel" placeholder="Ваш телефон..."/>
                        </fieldset>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>

            <footer>
                <a href="tel:+79999999999">+7 (999) 999-99-99</a>
            </footer>
        </div>
    );
}

export default App;
