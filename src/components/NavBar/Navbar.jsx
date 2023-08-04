import React from "react";

export default function NavBar() {
    return (
        <div>
            <a href="#main"><img class="header-image" src="/assets/EurekaLogoFinal.png" /></a>
            <ul class="header-middle">
                <a href="./schedule.html">SCHEDULE</a>
                <a href="#faq">FAQ</a>
                <a href="#sponsors">SPONSORS</a>
            </ul>
            <a class="register smallerbutton" target="_blank" rel="noopener noreferrer" href="https://forms.gle/YH7cy4UTepMwE6Qx5">Register!</a>
        </div>
    );
}