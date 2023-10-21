import React from "react";
import "./About.css";
import AboutImage from "../../assets/About/About.jpg";

export default function About() {
    return (
        <section id="about">
            <div className="about-left">
                <h2>Oakvilles Biggest Hackathon</h2>
                <p>
                    Welcome to Eureka! Come to Abbey Park High School for a 12
                    hour in person hackathon event! Here, you'll get to create a
                    solution or project related to our theme, and get the chance
                    to win prizes too! With workshops, coding challenges, and
                    networking opportunities, participants will have the chance
                    to unleash their full potential and bring their ideas to
                    life. So gear up, get ready to code, and let's build the
                    future together!
                </p>
            </div>
            <div className="about-right">
                <img
                    className="about-image glow"
                    src={AboutImage}
                    alt="placeholder"
                />
            </div>
        </section>
    );
}
