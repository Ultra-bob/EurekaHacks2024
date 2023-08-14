import React from "react";
import "./Footer.css";
import InstagramLogo from "../../assets/Instagram_Glyph_Gradient.svg";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-socials">
                    <a href="https://www.instagram.com/eureka_hackathon/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramLogo} alt="Instagram Logo" />
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © EurekaHacks, 2023</p>
                </div>
            </div>
        </footer>
    );
}