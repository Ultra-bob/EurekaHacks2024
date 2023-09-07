import React from "react";
import "./Header.css";

import Logo from "../../assets/EurekaLogo2024.png";
import Landing1 from "../../assets/landing-1.webp";
import Landing2 from "../../assets/landing-2.webp";

export default function Header() {
    return (
        <section id="home">
            <div className="banner">
                <div className="banner-content">
                    <div className="landing-images">
                        <div className="landing-1 banner-image-glow">
                            <img
                                src={Landing1}
                                className="landing-image"
                                alt="Landing 1"
                            />
                        </div>
                        <div className="landing-2 banner-image-glow">
                            <img
                                src={Landing2}
                                className="landing-image"
                                alt="Landing 2"
                            />
                        </div>
                    </div>
                    <div className="banner-text-logo">
                        <div className="banner-text">
                            <h1>Eureka</h1>
                            <h3>HACKS</h3>
                            <div className="header-button-container">
                                <a
                                    className="header-button-block header-button-glow"
                                    href="https://google.com"
                                    target="_blank"
                                    rel="noopenner noreferrer"
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                        <div className="banner-logo-container">
                            <img
                                className="banner-logo"
                                src={Logo}
                                alt="Eureka Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
