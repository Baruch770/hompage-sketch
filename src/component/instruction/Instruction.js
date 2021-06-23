import React, { Fragment } from 'react';
import {TitleHR} from "../../util/Util";
import "./style.css";
import img3 from "../../img/3.png"
import img2 from "../../img/2.png"
import img1 from "../../img/1.png"

export default function Instruction() {
    const desc1 = <Fragment>צור אירוע והזמן אליו<br /> את האורחים שלך</Fragment>
    const desc2 = <Fragment>הזמן את התאריך הרצוי<br /> לאירוע שלך</Fragment>
    const desc3 = <Fragment>בחר מיקום, סוג אירוע<br /> ומספר מוזמנים</Fragment>

    const data = [
        {
            img: img3,
            desc: desc1
        },
        {
            img: img2,
            desc: desc2
        },
        {
            img: img1,
            desc: desc3
        }
    ]

    return (
        <div className="instruc-block">
            <TitleHR pt1="הקם ארוע" pt2="ב-3 צעדים פשוטים"/>

            <div className="instruc-items">
                {data.map((item, key) => <InstrucItem img={item.img} desc={item.desc} />)}
            </div>
        </div>
    )
}

function InstrucItem({ img, desc }) {
    return (
        <div className="instruc-item">
            <div className="text">
                <p>{desc}</p>
            </div>
            <img src={img} alt="instruction-img" />
        </div>
    )
}
