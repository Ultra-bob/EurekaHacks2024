import React from "react";
import "./Navbar.css";
import { useScrollDirection } from "../../hooks/useScrollDirection";

import Button from "../Button/Button";
import Logo from "../../assets/EurekaIcon2024.png";

export default function NavBar() {
    const scrollingUp = useScrollDirection();

    return (
        <div className={["navbar", scrollingUp === "down" ? "navbar-overlay" : ""].join(" ")}>
            <div className="navbar-box">
                <a href="#home">
                    <img className="navbar-icon" src={Logo} alt="Eureka! Icon" />
                </a>
            </div>
            <ul className="links">
                {/* <a href="/schedule">Schedule</a> We can add this once shedules actually done*/}
                <a href="#home">Home</a>
                <a href="#faq">FAQ</a>
                <a href="#sponsors">Sponsors</a>
            </ul>
            <div className="register">
                <Button text="Register" link="https://google.com" />
            </div>
        </div>
    );
}