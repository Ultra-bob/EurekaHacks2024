import React from "react";
import styles from "./About.module.css";
import AboutImage from "@/../public/About/About.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            id="about"
            className={styles.about}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            viewport={{ once: true, amount: 0.8 }}
        >
            
            <div className={styles["about-text"]}>
                <div className={styles["about-info"]}>
                    <h3>Oakville's Largest Hackathon</h3>
                    <p>
                        EurekaHACKS is an annual 12-hour hackathon hosted at
                        Abbey Park High School in Oakville, Canada. It is the
                        largest high school hackathon in Halton. Our exciting
                        event features workshops, fun activities, and over
                        $1,000 worth of prizes! We're committed to inspiring
                        students of all skill levels to put their creativity and
                        knowledge into practice by building something awesome.
                    </p>
                </div>
                <motion.div
                    className={styles["about-image"]}
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 1 },
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <div className={styles["image-glow"]}></div>
                    <Image
                        className={`${styles["about-image"]} ${styles["glow"]}`}
                        src={AboutImage}
                        alt="placeholder"
                    />
                </motion.div>
            </div>
            <div className={styles.shape1} />
            <div className={styles.shape2} />
            <div className={styles.shape3} />
            <div className={styles.shape4} />
        </motion.section>
    );
}
