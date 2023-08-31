import React from "react";
import "./Header.css";
import Button from "../Button/Button";

import Logo from "../../assets/EurekaLogo2024.png";
import Landing1 from "../../assets/landing-1.jpg";
import Landing2 from "../../assets/landing-2.jpg";

export default function Header() {
    return (
        <section id="home">
            <div className="header">
                <div className="banner">
                    <div className="banner-content">
                        <div className="landing-images">
                            <div className="landing-1 banner-image-glow">
                                <img src={Landing1} alt="Landing 1" />
                            </div>
                            <div className="landing-2 banner-image-glow">
                                <img src={Landing2} alt="Landing 2" />
                            </div>
                        </div>
                        <div className="banner-text">
                            <h1>EUREKA!</h1>
                            <h2>2024</h2>
                            <Button text="Register" link="https://google.com" />
                        </div>
                        <div className="banner-logo-container">
                            <img className="banner-logo" src={Logo} alt="Eureka Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}