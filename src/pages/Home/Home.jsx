import React from "react";
import "./Home.css";

import FAQ from "../../components/FAQ/FAQ";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
// import SponsorPanel from "../../components/SponsorPanel/SponsorPanel"
// import SponsorBG from "../../components/SponsorBG/SponsorBG"

export default function Home() {
    return (
        <div className="home-content">
            <Header />
            <hr />
            <Description />
            <hr />
            <FAQ />
        </div>
    );
}
