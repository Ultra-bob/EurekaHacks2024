import React from "react";
import styles from "./Sponsors.module.css";
import SponsorBox from "./SponsorBox.jsx";
import { motion } from "framer-motion";

import APHS from "@/../public/apicon.png";

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

const sponsorBoxFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

export default function Sponsors() {
    return (
        <section id="sponsors" className={styles.sponsors}>
            <motion.h2 {...fadeIn}>Sponsors</motion.h2>
            <div className={styles["sponsor-panel"]}>
                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["plat-sponsors"]}
                >
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </motion.div>
                {/* <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["gold-sponsors"]}
                >
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
                </motion.div> */}
                {/* <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["silver-sponsors"]}
                >
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
                </motion.div> */}
                {/* <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["bronze-sponsors"]}
                >
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
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </motion.div> */}
                {/* <div className={styles.shape1} />
                <div className={styles.shape2} /> */}
                <motion.h2 {...fadeIn}>Our Partners</motion.h2>
                <motion.div
                    {...sponsorBoxFadeIn}
                    className={styles["partners"]}
                >
                    <SponsorBox
                        name="Abbey Park"
                        image={APHS}
                        link="https://aph.hdsb.ca/"
                    />
                </motion.div>
            </div>
        </section>
    );
}
