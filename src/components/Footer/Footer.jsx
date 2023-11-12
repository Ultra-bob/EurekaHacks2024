import React from "react";
import { BsInstagram, BsLinkedin, BsTiktok, BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
    const iconVariants = {
        whileHover: { scale: 1.2, rotate: 10 },
        whileTap: { scale: 0.8, rotate: -10, borderRadius: "100%" },
    };

    return (
        <div className={styles["footer-container"]}>
            <div className={styles["footer-socials"]}>
                <motion.a
                    className={styles.instagram}
                    href="https://www.instagram.com/eureka_hacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <BsInstagram />
                </motion.a>

                <motion.a
                    className={styles.linkedin}
                    href="https://www.linkedin.com/company/eureka-hackthon/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <BsLinkedin />
                </motion.a>

                <motion.a
                    className={styles.tiktok}
                    href="https://www.tiktok.com/@eurekahacks?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <BsTiktok />
                </motion.a>

                <motion.a
                    className={styles.discord}
                    href="https://discord.gg/nff6VueNgk"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <BsDiscord />
                </motion.a>
            </div>
            <div className={styles["footer-copyright"]}>
                <p>Copyright © EurekaHacks, 2023</p>
            </div>
        </div>
    );
}
