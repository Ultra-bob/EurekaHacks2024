import React from "react";
import "./Footer.css";
import { BsInstagram, BsLinkedin, BsTiktok, BsDiscord } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-socials">
                <a
                    className="instagram"
                    href="https://www.instagram.com/eureka_hacks/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram />
                </a>
                <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/eureka-hackthon/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="tiktok"
                    href="https://www.tiktok.com/@eurekahacks?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTiktok />
                </a>
                <a
                    className="discord"
                    href="https://discord.gg/nff6VueNgk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsDiscord />
                </a>
            </div>
            <div className="footer-copyright">
                <p>Copyright © EurekaHacks, 2023</p>
            </div>
        </div>
    );
}
