import React from "react";
import "./Home.css";

import FAQ from "../../components/FAQ/FAQ";
// import About from "../../components/PossibleAbout/PossibleAbout";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
// import SponsorPanel from "../../components/SponsorPanel/SponsorPanel"
// import SponsorBG from "../../components/SponsorBG/SponsorBG"

export default function Home() {
    return (
        <div>
            <Header />
            <hr />
            <Description />
            <hr />
            <FAQ />
        </div>
    );
}
