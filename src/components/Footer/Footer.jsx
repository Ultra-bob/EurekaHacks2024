import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-socials">
                    <a
                        href="https://www.instagram.com/eureka_hackathon/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsInstagram />
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © EurekaHacks, 2023</p>
                </div>
            </div>
        </footer>
    );
}
