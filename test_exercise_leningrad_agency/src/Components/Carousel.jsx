import style from "./Carousel.module.sass"
import leftImg from "../assets/img/left.jpg";
import rightImg from "../assets/img/right.jpg";
import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function TCarousel() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <Carousel {...settings}>

            <div className={style.carousel__item__wrapper}>
                <a href="#" className={style.carousel__item}>
                    <div className={style.testimonials__item_col_left}>
                        <div className={style.round}>
                            <img className={style.round__img} src={leftImg} alt=""/>
                        </div>
                    </div>
                    <div className={style.testimonials__item_col_right}>
                        <div className={style.testimonials__name}>
                            Roger Stevenson
                        </div>

                        <blockquote
                            className={style.blockquote + " " + style.testimonials__blockquote}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae
                            corporis
                            debitis
                            explicabo minus nobis quidem? A adipisci
                            deleniti doloribus inventore, itaque iure labore laudantium minus
                            nostrum,
                            nulla
                            officia quia.
                        </blockquote>

                    </div>
                </a>
            </div>

            <div className={style.carousel__item__wrapper}>
                <a href="#" className={style.carousel__item}>
                    <div className={style.testimonials__item_col_left}>
                        <div className={style.round}>
                            <img className={style.round__img} src={rightImg} alt=""/>
                        </div>
                    </div>
                    <div className={style.testimonials__item_col_right}>
                        <div className={style.testimonials__name}>
                            Steven Rogerson
                        </div>

                        <blockquote
                            className={style.blockquote + " " + style.testimonials__blockquote}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae
                            corporis
                            debitis
                            explicabo minus nobis quidem? A adipisci
                            deleniti doloribus inventore, itaque iure labore laudantium minus
                            nostrum,
                            nulla
                            officia quia.
                        </blockquote>

                    </div>
                </a>
            </div>

        </Carousel>
    )

}

export default TCarousel;