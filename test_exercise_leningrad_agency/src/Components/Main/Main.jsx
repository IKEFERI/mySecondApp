import style from "../../App.module.sass";
import TCarousel from "./Testimonials/Carousel";
import React from "react";



let Main = () => {
    return(
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
    )
}
 export default Main;
