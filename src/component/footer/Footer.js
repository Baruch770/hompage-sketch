import React from 'react';
import './style.css';
import logo from "../../img/Logo.png";
import inst from "../../img/6.png"
import eml from "../../img/4.png"


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-block">
                <div className="map">
                    <div className="footer-title">
                        <h3>מפת האתר</h3>
                    </div>
                    <div className="content">
                        <p>
                        בוא לעבוד איתנו
                        <br />הצטרף לקהילת המארחים
                        <br />מצא מארח
                        <br />?איך זה עובד
                        <br />מפת אתר
                        <br />תנאי שימוש
                    </p>
                    </div>

                </div>
                <div className="contact">
                    <div className="footer-title">
                        <h3>נשמח להיות בקשר</h3>
                    </div>
                    <form className="footer-form">
                        <div className="name-phone">
                            <div className="input">
                                <input type="text" placeholder="שם" className="name" />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="טלפון" className="phone" />
                            </div>
                        </div>
                        <div className="input">
                            <input type="email" placeholder="אימייל" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="הודעה" />
                        </div>
                        <div className="input">
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                </div>
                <div className="social">
                    <img alt="logo-img" src={logo} className="logo" />
                    <div className="follow">
                        <div>
                            <img src={inst} alt="insegram-icon" />
                        </div>
                        <div>
                            <img src={eml} alt="email-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page">
                <div>
                    <p>2021 BMyGuest כל הזכויות שמורות ל</p>
                </div>
                <div>
                    <p>Smart :אפיון ועיצוב דף הבית</p>
                </div>
            </div>
        </div>
    )
}
