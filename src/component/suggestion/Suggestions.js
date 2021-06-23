import React from 'react';
import { TitleHR } from "../../util/Util";
import { BtnOrng } from "../../buttons/Buttons";
import HouseCard from "../houseCard/HouseCard"

import "./style.css";

import houseImg from "../../img/house.jpg"
import profileImg from "../../img/user1.jpg"


export default function Suggestions() {
    const sampleHouses = [
        {
            price: 1300,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי"
        },
        {
            price: 1300,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי"
        },
        {
            price: 1900,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי"
        },
        {
            price: 1300,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי"
        },
        {
            price: 1300,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי"
        },
    ]

    return (
        <div className="suggestions">
            <TitleHR pt1="מצא את המארח" pt2="לארוע המושלם שלך" />
            <div className="suggs-block">
                {sampleHouses.map(e => <HouseCard info={e} />)}
            </div>
            <BtnOrng btnName="לכל המארחים"/>
        </div>
    )
}
