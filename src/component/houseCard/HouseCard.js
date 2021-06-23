import React from 'react';
import "./style.css";
import locationImage from '../../img/host_location.png';


export default function HouseCard({ info }) {
    const { title, price, location, name, profileImg, houseImg } = info;

    return (
        <div className="sugg-card">
            <div className="heart">
                <span>&#9825;</span>
            </div>
            <div class="img-wrapper">
                <img src={houseImg} className="house-img" alt="house-img" />
            </div>

            <div className="content">
                <div className="title-img">
                    <div className="title">
                        <p >{title}</p>
                    </div>
                    <img src={profileImg} className="profile-img" />
                </div>
                <hr className="hr-blk-line" />
                <div className="rent-info">
                    <p className="name">{name}</p>
                    <p className="price">{price.toString()}₪</p>
                    <div className="location-box">
                        <img src={locationImage} alt="location" className="lction-img" />
                        <p className="location">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
