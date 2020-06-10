import leftImg from "../../../assets/img/left.jpg";
import rightImg from "../../../assets/img/right.jpg";
import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from "./TestimonialItem";


function TCarousel(props) {
    let settings = {
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

    let items = props.items.map((d) => {return <TestimonialItem key={d.id} data={d}/>})

    return (
        <Carousel {...settings}>

            {items}

        </Carousel>
    )

}

export default TCarousel;