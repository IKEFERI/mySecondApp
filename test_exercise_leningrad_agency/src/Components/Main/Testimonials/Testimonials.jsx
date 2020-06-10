import style from "../../../App.module.sass";
import TCarousel from "./Carousel";
import React from "react";
import leftImg from "../../../assets/img/left.jpg";
import rightImg from "../../../assets/img/right.jpg";

let Testimonials = () => {

    let items = [
        {
            id: 0,
            photo: leftImg,
            name: "Roger Stevenson",
            blockquote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae corporis debitis explicabo minus nobis quidem? A adipisci deleniti doloribus inventore, itaque iure labore laudantium minus nostrum, nulla officia quia."
        },
        {
            id: 1,
            photo: rightImg,
            name: "Steven Rogerson",
            blockquote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae corporis debitis explicabo minus nobis quidem? A adipisci deleniti doloribus inventore, itaque iure labore laudantium minus nostrum, nulla officia quia."
        }
    ]

    return (
        <section className={style.testimonials}>
            <h2 className={style.h2}>Отзывы наших покупателей</h2>
            <div className={style.carousel + " " + style.testimonials__carousel}>
                <TCarousel items={items}/>
            </div>
        </section>
    )
}

export default Testimonials;