import React from "react";
import "./Home.css";

import Logo from "../../assets/EurekaLogo2024.png";
import FAQ from "../../components/FAQ/FAQ";
import About from "../../components/PossibleAbout/PossibleAbout";
import SponsorPanel from "../../components/SponsorPanel/SponsorPanel"
import SponsorBG from "../../components/SponsorBG/SponsorBG"

export default function Home() {
    return (
        <div>
            <section id="home">
                <div className="banner">
                    <div className="banner-top">
                        <div className="banner-text">
                            <h2>December 16th</h2>
                            <h1>EUREKA!</h1>
                            <h1>2024</h1>
                        </div>
                        <img className="logo" src={Logo} alt="logo" />
                    </div>
                </div>
            </section>
            <About />
            <FAQ />
        </div>
    );
}