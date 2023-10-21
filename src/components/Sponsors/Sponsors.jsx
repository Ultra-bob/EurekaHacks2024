import React from "react";
import "./Sponsors.css";
import SponsorBox from "./SponsorBox.jsx";

import APHS from "../../assets/apicon.png";

export default function Sponsors() {
    return (
        <section id="sponsors">
            <h1>Sponsors</h1>
            <div className="sponsor-panel">
                <div className="gold-sponsors">
                    <SponsorBox
                        name="Abbey Park"
                        tier="gold"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </div>
                <div className="silver-sponsors">
                    <SponsorBox
                        name="Abbey Park"
                        tier="silver"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                    <SponsorBox
                        name="Abbey Park"
                        tier="silver"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </div>
                <div className="bronze-sponsors">
                    <SponsorBox
                        name="Abbey Park"
                        tier="bronze"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                    <SponsorBox
                        name="Abbey Park"
                        tier="bronze"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                    <SponsorBox
                        name="Abbey Park"
                        tier="bronze"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </div>
            </div>
        </section>
    );
}
