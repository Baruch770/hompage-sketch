import React from 'react';
import "./style.css";
import logo from "../../img/Logo.png";
import user from "../../img/5.png";
import { BtnOrng, BtnWht } from '../../buttons/Buttons';


export default function NavBar() {
    const toggleMenue = (e) => {
        document.querySelector(".navbar-buttons-mobile").classList.toggle("visible")
    }


    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <div class="navbar-menue">
                    <div className="burger" onClick={toggleMenue}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src={logo} alt="logo" class="navbar-logo" />

                </div>
                <div class="navbar-buttons-mobile">
                    <Enter />
                    <BtnWht btnName="בוא ליצור רווחים מהבית שלך" style={{"width": "100%", "height": ""}}/>
                    <BtnOrng btnName="איך הופכים למארח" style={{"width": "100%", "height": ""}} />
                </div>
            </div>

            <div className="navbar-desk">
                <div class="navbar-buttons">
                    <Enter />
                    <BtnOrng btnName="איך הופכים למארח" style={{"width": "auto", "height": "auto"}}/>
                    <BtnWht btnName="בוא ליצור רווחים מהבית שלך"  style={{"width": "auto", "height": "auto"}}/>
                </div>

                <img src={logo} alt="logo" class="navbar-logo" />
            </div>
        </div>

    )
}

function Enter() {
    return (
        <div className="navbar-enter">
            <span>כניסה</span>
            <img src={user} alt="logo" className="logo-user" />
        </div>
    )
}
