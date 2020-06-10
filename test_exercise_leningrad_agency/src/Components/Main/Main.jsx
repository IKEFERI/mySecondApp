import style from "./Main.module.sass";
import React from "react";
import MainHeader from "./MainHeader";
import Testimonials from "./Testimonials/Testimonials";
import WorkingHours from "./WorkingHours";


let Main = () => {
    return (
        <main className={style.main}>
            <article>
                <MainHeader/>
                <Testimonials/>
                <WorkingHours/>
            </article>
        </main>
    )
}
export default Main;
