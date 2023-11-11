import React from "react";
import styles from "./Sponsors.module.css";
import SponsorBox from "./SponsorBox.jsx";

import APHS from "@/../public/apicon.png";

export default function Sponsors() {
    return (
        <section id="sponsors" className={styles.sponsors}>
            <h1>Sponsors</h1>
            <div className={styles["sponsor-panel"]}>
                <div className={styles["gold-sponsors"]}>
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </div>
                <div className={styles["silver-sponsors"]}>
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </div>
                <div className={styles["bronze-sponsors"]}>
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </div>
            </div>
        </section>
    );
}
