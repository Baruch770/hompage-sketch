import React from 'react';
import "./style.css"

export function InputBox({ placeholder, label, style }) {
    return (
        <div class="input-box">
            <label>{label}</label>
            <input type="text" placeholder={placeholder} style={style} />
        </div>
    )
}

export function TitleHR({ pt1, pt2 }) {
    return (
        <div className="title">
            <h3>{pt1}</h3>
            <h3>&nbsp;{pt2}</h3>
            <hr class="orng-line" />
        </div>
    )
}

export function SelectPref({ h2, h3 }) {
    return (
        <div className="select-box">
            <div className="text">
                <div className="h2">
                    <h2>{h2}</h2>
                </div>
                <div className="h3">
                    <h3>{h3}</h3>
                </div>
            </div>


            <div className="select">
                <select>
                </select>
            </div>
        </div>
    )

}