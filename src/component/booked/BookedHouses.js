import React from 'react';
import "./style.css";
import HouseCard from "../houseCard/HouseCard"

import houseImg from "../../img/house.jpg"
import profileImg from "../../img/user1.jpg"

export default function BookedHouses() {
    const sampleHouses = [
        {
            price: 1300,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי",
        },
        {
            price: 1300,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי",
        },
        {
            price: 1900,
            name: "חיים בן לולו",
            location: "כפר סבא",
            profileImg,
            houseImg,
            title: "הוילה שלי",
        }
    ]

    return (
        <div className="booked-houses">
            <div className="booked-houses-block">
                {sampleHouses.map(e => <HouseCard info={e} />)}
            </div>
        </div>
    )
}
