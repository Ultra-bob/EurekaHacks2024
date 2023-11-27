import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

import Logo from "@/../public/Header/EurekaLogo2024.png";
import Landing1 from "@/../public/Header/landing-1.jpg";
import Landing2 from "@/../public/Header/landing-2.jpg";
import Image from "next/image";

export default function Header() {
    return (
        <section className={styles.home}>
            <div className={styles.banner}>
                <div className={styles["banner-content"]}>
                    <motion.div
                        className={styles["landing-images"]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            className={`${styles["landing-1"]} ${styles["glow"]}`}
                            transition={{
                                duration: 2,
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                            }}
                            whileHover={{ scale: 1.07 }}
                        >
                            <div className={styles["image-glow1"]}></div>
                            <Image
                                src={Landing1}
                                className={styles["landing-image"]}
                                alt="Landing 1"
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.div
                            className={`${styles["landing-2"]} ${styles["glow"]}`}
                            transition={{
                                duration: 2,
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                            }}
                            whileHover={{ scale: 1.07 }}
                        >
                            <div className={styles["image-glow2"]}></div>
                            <Image
                                src={Landing2}
                                className={styles["landing-image"]}
                                alt="Landing 2"
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>
                    <div className={styles["banner-text-logo"]}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className={styles["banner-text"]}
                        >
                            <h4>March 2nd, 2024</h4>
                            <h1>Eureka</h1>
                            <h3>HACKS</h3>

                            <motion.div
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                }}
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.9 }}
                                className={styles["register-outline"]}
                            >
                                <div className={styles["register"]}>
                                    <div className={` ${styles["button"]}`}>
                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            rel="noopenner noreferrer"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <div className={styles["banner-logo-container"]}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
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
