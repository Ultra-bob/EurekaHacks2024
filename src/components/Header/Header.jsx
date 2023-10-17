import React from "react";
import "./Header.css";

// import Logo from "../../assets/EurekaLogo2024.png";
import Logo from "../../assets/Header/EurekaLogo2024.png";
import Landing1 from "../../assets/Header/landing-1.jpg";
import Landing2 from "../../assets/Header/landing-2.jpg";

export default function Header() {
    return (
        <section id="home">
            <div className="banner">
                <div className="banner-content">
                    <div className="landing-images">
                        <div className="landing-1 banner-glow">
                            <img
                                src={Landing1}
                                className="landing-image"
                                alt="Landing 1"
                                loading="lazy"
                                height="293px"
                                width="196px"
                            />
                        </div>
                        <div className="landing-2 banner-glow">
                            <img
                                src={Landing2}
                                className="landing-image"
                                alt="Landing 2"
                                loading="lazy"
                                height="345px"
                                width="230px"
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
                                width="410px"
                                height="410px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
