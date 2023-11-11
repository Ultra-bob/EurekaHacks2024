import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

import Logo from "@/../public/Header/EurekaLogo2024.png";
import Landing1 from "@/../public/Header/landing-1.jpg";
import Landing2 from "@/../public/Header/landing-2.jpg";
import Image from "next/image";

export default function Header() {
    return (
        <section id={styles.home}>
            <div className={styles.banner}>
                <div className={styles["banner-content"]}>
                    <div className={styles["landing-images"]}>
                        <motion.div
                            className={`${styles["landing-1"]} ${styles["banner-glow"]}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <Image
                                src={Landing1}
                                className={styles["landing-image"]}
                                alt="Landing 1"
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.div
                            className={`${styles["landing-2"]} ${styles["banner-glow"]}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Image
                                src={Landing2}
                                className={styles["landing-image"]}
                                alt="Landing 2"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                    <div className={styles["banner-text-logo"]}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.7 }}
                            className={styles["banner-text"]}
                        >
                            <h1>Eureka</h1>
                            <h3>HACKS</h3>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2.5 }}
                                className={styles["header-button-container"]}
                            >
                                <a
                                    className={`${styles["header-button-block"]} ${styles["header-button-glow"]}`}
                                    href="https://google.com"
                                    target="_blank"
                                    rel="noopenner noreferrer"
                                >
                                    Register
                                </a>
                            </motion.div>
                        </motion.div>
                        <div className={styles["banner-logo-container"]}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <Image
                                    className={styles["banner-logo"]}
                                    src={Logo}
                                    alt="Eureka Logo"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
