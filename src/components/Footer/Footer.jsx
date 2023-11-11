import React from "react";
import { BsInstagram, BsLinkedin, BsTiktok, BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles["footer-container"]}>
            <div className={styles["footer-socials"]}>
                <a
                    className={styles.instagram}
                    href="https://www.instagram.com/eureka_hacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram />
                </a>
                <a
                    className={styles.linkedin}
                    href="https://www.linkedin.com/company/eureka-hackthon/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    className={styles.tiktok}
                    href="https://www.tiktok.com/@eurekahacks?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTiktok />
                </a>
                <a
                    className={styles.discord}
                    href="https://discord.gg/nff6VueNgk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsDiscord />
                </a>
            </div>
            <div className={styles["footer-copyright"]}>
                <p>Copyright © EurekaHacks, 2023</p>
            </div>
        </div>
    );
}
