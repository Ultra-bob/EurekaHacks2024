import React from "react";
import "./Header.css";

import Logo from "@/public/Header/EurekaLogo2024.png";
import Landing1 from "@/public/Header/landing-1.jpg";
import Landing2 from "@/public/Header/landing-2.jpg";
import Image from "next/image";

export default function Header() {
    return (
        <section id="home">
            <div className="banner">
                <div className="banner-content">
                    <div className="landing-images">
                        <div className="landing-1 banner-glow">
                            <Image
                                src={Landing1}
                                className="landing-image"
                                alt="Landing 1"
                                loading="lazy"
                            />
                        </div>
                        <div className="landing-2 banner-glow">
                            <Image
                                src={Landing2}
                                className="landing-image"
                                alt="Landing 2"
                                loading="lazy"
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
                            <Image
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
