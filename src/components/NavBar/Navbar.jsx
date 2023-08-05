import React from "react";
import "./Navbar.css";

import Logo from "../../assets/EurekaIcon2024.png";

export default function NavBar() {
    return (
        <div className="navbar">
            <a href="#main">
                <img class="navbar-icon" src={Logo} alt="Eureka! Icon" />
            </a>
            <ul class="links">
                {/* <a href="/schedule">Schedule</a> We can add this once shedules actually done*/}
                <a href="#main">Home</a>
                <a href="#faq">FAQ</a>
                <a href="#sponsors">Sponsors</a>
            </ul>
        </div>
    );
}