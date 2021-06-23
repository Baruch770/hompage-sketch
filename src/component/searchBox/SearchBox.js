import React from 'react';
import "./style.css";
import { InputBox, SelectPref } from "../../util/Util"

export default function SearchBox() {
    return (
        <div className="search-box-block">
            <div className="search-box">
                <div className="mobile-input">
                    <input type="text" placeholder="חפש את מקום האירוח שלך" />
                </div>

                <div className="items">
                    <InputBox placeholder="בחר עיר בה תרצה לערוך את האירוע" label="מיקום?" />
                    <SelectPref h2="כמה אורחים?" h3="בחר מספר מוזמנים" />
                    <SelectPref h2="מה הארוע שלך?" h3="בחר סוג ארוע" />
                </div>
                <div className="button">
                    <button>&#9906;</button>
                </div>
            </div>
        </div>
    )
}

