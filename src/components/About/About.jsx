import React from "react";
import styles from "./About.module.css";
import AboutImage from "@/../public/About/About.jpg";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <h2>Oakville's Largest Hackathon</h2>
            <div className={styles["about-text"]}>
                <p>
                    EurekaHACKS is an annual 12-hour hackathon hosted at
                    Abbey Park High School in Oakville, Canada. It is the
                    largest high school hackathon in Halton. Our
                    exciting event features workshops, fun activities, and over
                    $1,000 worth of prizes! We're committed to inspiring students
                    of all skill levels to put their creativity and knowledge
                    into practice by building something awesome.
                </p>
                <Image
                    className={`${styles["about-image"]} ${styles["glow"]}`}
                    src={AboutImage}
                    alt="placeholder"
                />
            </div>
        </section>
    );
}
