import React from 'react';
import "./style.css";
import bannerImg from "../../img/banner.jpg"

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-img">
                <img alt="banner photo" src={bannerImg} />
            </div>
            <div className="banner-text">
                <div className="text-box">
                    <h1>?מחפש מקום לאירוע</h1>
                    <h1>?סדנא, מסיבה, או הרצאה</h1>
                    <h2>כאן תמצא מקומות אירוח יצירתיים, מעניינים ומשתלמים</h2>
                </div>
            </div>
        </div>
    )
}
