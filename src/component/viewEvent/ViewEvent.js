import React from 'react';
import { TitleHR } from "../../util/Util";
import Coin from "../coin/Coin";
import "./style.css";
import coinImg from "../../img/coin-img.jpg";


export default function ViewEvent() {
    const coins = [
        {
            text: "מסיבות פרטיות",
            img: coinImg,
        },
        {
            text: "הופעות ואירועים",
            img: coinImg,
        },
        {
            text: "סדנאות והרצאות",
            img: coinImg,
        }
    ]


    return (
        <div className="view-event">
            <div className="text-box">
                <TitleHR pt1="הארועים"  pt2="הפתוחים שלנו"/>
                <div className="text">
                    <p>מוזמן לבחור, להצטרף ונהנות מאחד מהאירועים הפתוחים שלנו</p>
                </div>
            </div>
            <div className="coins">
                {coins.map(e => <Coin text={e.text} img={e.img}/>)}
            </div>
        </div>
    )
}
