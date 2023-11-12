import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "@/../public/EurekaIcon2024.png";
import Link from "next/link";

export default function NavBar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <motion.div
            className={[
                styles.navbar,
                scrollY !== 0 ? styles["navbar-overlay"] : "",
            ].join(" ")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
        >
            <div className={styles["navbar-box"]}>
                <Image
                    className={styles["navbar-icon"]}
                    src={Logo}
                    alt="Eureka! Icon"
                    href="/"
                />
            </div>
            <ul className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/#about">About</Link>
                <Link href="/#sponsors">Sponsors</Link>
                <Link href="/#faq">FAQ</Link>
            </ul>

            <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
                <div className={styles["hamburger-line"]} />
                <div className={styles["hamburger-line"]} />
                <div className={styles["hamburger-line"]} />
            </div>
            <div
                className={`${styles["mobile-menu"]} ${
                    menuOpen
                        ? styles["mobile-menu-open"]
                        : styles["mobile-menu-closed"]
                }`}
            >
                <div className={styles["mobile-menu-top"]}>
                    <div className={styles["close"]} onClick={toggleMenu}>
                        <div className={styles["close-line-1"]} />
                        <div className={styles["close-line-2"]} />
                    </div>
                </div>
                <div className={styles["mobile-menu-content"]}>
                    <Image
                        className={styles["mobile-menu-nav-icon"]}
                        src={Logo}
                        alt="Eureka! Icon"
                        href="/"
                    />
                    <Link href="/" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/#about" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/#sponsors" onClick={toggleMenu}>
                        Sponsors
                    </Link>
                    <Link href="/#faq" onClick={toggleMenu}>
                        FAQ
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
