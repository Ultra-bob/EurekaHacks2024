import React from "react";
import "./Home.css";

import Logo from "../../assets/EurekaLogo2024.png";
import FAQ from "../../components/FAQ/FAQ";

export default function Home() {
    return (
        <div>
            <div className="banner">
                <div class="banner-top">
                    <div class="banner-text">
                        <h2>December 16th</h2>
                        <h1>EUREKA!</h1>
                        <h1>2024</h1>
                    </div>
                    <img class="logo" src={Logo} alt="logo" />
                </div>
            </div>
            <FAQ />
        </div>
    );
}