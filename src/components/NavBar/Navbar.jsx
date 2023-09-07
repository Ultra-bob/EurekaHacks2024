import React from "react";
import "./Navbar.css";
import { useScrollDirection } from "../../hooks/useScrollDirection";

// import Button from "../Button/Button";
import Logo from "../../assets/EurekaIcon2024.png";

export default function NavBar() {
    const scrollingUp = useScrollDirection();

    // Some useless code here but if we ever wanna change it it's here.
    // Decided to remove scroll effects for above
    return (
        <div
            className={[
                "navbar",
                scrollingUp === "down" ? "navbar-overlay" : "",
            ].join(" ")}
        >
            <div className="navbar-box">
                <img
                    className="navbar-icon"
                    src={Logo}
                    alt="Eureka! Icon"
                    href="/#home"
                />
            </div>
            <ul className="links">
                <a href="/#home">Home</a>
                <a href="#about">About</a>
                <a href="/schedule">Schedule</a>
                <a href="/gallery">Gallery</a>
                <a href="/#faq">FAQ</a>
                <a href="/#sponsors">Sponsors</a>
            </ul>
            {/* <div className="register">
                <Button text="Register" link="https://google.com" />
            </div> */}
        </div>
    );
}
