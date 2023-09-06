import React from "react";
import "./SponsorPanel.css";
import APHS from "../../assets/apicon.png";

export default function SponsorPanel() {
    return (
        <section id="SponsorPanel">
            <div className="SponsorPanel">
                <a
                    href="https://aph.hdsb.ca/"
                    target="_blank"
                    class="sponsorbox"
                    rel="noreferrer"
                >
                    <img src={APHS} alt="Abbey Park Icon" />
                </a>
            </div>
        </section>
    );
}
