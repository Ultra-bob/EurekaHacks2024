import { useState } from "react";
import styles from "./Navbar.module.css";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Image from "next/image";

import Logo from "@/../public/EurekaIcon2024.png";

export default function NavBar() {
    const scrollingUp = useScrollDirection();
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div
            className={[
                styles.navbar,
                scrollingUp === "down" ? styles["navbar-overlay"] : "",
            ].join(" ")}
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
                <a href="/">Home</a>
                <a href="/#about">About</a>
                <a href="/schedule">Schedule</a>
                <a href="/gallery">Gallery</a>
                <a href="/#faq">FAQ</a>
                <a href="/#sponsors">Sponsors</a>
            </ul>

            <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
                <div className={styles["hamburger-line"]} />
                <div className={styles["hamburger-line"]} />
                <div className={styles["hamburger-line"]} />
            </div>
            <div
                className={`${styles["mobile-menu"]} ${
                    menuOpen ? styles["mobile-menu-open"] : styles["mobile-menu-closed"]
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
                    <a href="/" onClick={toggleMenu}>
                        Home
                    </a>
                    <a href="/#about" onClick={toggleMenu}>
                        About
                    </a>
                    <a href="/schedule" onClick={toggleMenu}>
                        Schedule
                    </a>
                    <a href="/gallery" onClick={toggleMenu}>
                        Gallery
                    </a>
                    <a href="/#faq" onClick={toggleMenu}>
                        FAQ
                    </a>
                    <a href="/#sponsors" onClick={toggleMenu}>
                        Sponsors
                    </a>
                </div>
            </div>
        </div>
    );
}
