import style from "../../App.module.sass";
import React from "react";


let WorkingHours = () => {
    return(
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
    )
}


export default WorkingHours;