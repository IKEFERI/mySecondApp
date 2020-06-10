import style from "./TestimonialItem.module.sass";
import React from "react";


let TestimonialItem = (props) => {
    return (
        <div className={style.carousel__item__wrapper}>
            <a href="#" className={style.carousel__item}>
                <div className={style.testimonials__item_col_left}>
                    <div className={style.round}>
                        <img className={style.round__img} src={props.data.photo} alt=""/>
                    </div>
                </div>
                <div className={style.testimonials__item_col_right}>
                    <div className={style.testimonials__name}>
                        {props.data.name}
                    </div>
                    <blockquote
                        className={style.blockquote + " " + style.testimonials__blockquote}>
                        {props.data.blockquote}
                    </blockquote>
                </div>
            </a>
        </div>
    )
}

export default TestimonialItem;