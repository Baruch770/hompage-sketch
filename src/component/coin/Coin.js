import React from 'react';
import "./style.css"

export default function Coin({text, img}) {
    return (
        <div className="coin">
            <div className="text">
                <p>{text}</p>
            </div>
            <div className="img">
                <img alt="coin-img" src={img} className="coin-img"/>
            </div>
        </div>
    )
}
