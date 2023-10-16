import React from "react";
import "./About.css";
import About from "../../assets/About.jpg";

export default function Description() {
    return (
        <section id="about">
            <div className="description">
                <div className="description-left">
                    <h3>Oakvilles best Hackathon!</h3>
                    <p>
                        Welcome to Eureka! Come to Abbey Park High School for a
                        12 hour in person hackathon event! Here, you'll get to
                        create a solution or project related to our theme, and
                        get the chance to win prizes too! With workshops, coding
                        challenges, and networking opportunities, participants
                        will have the chance to unleash their full potential and
                        bring their ideas to life. So gear up, get ready to
                        code, and let's build the future together!
                    </p>
                </div>
                <div className="description-right">
                    <img
                        className="description-image glow"
                        src={About}
                        alt="placeholder"
                    />
                </div>
            </div>
        </section>
    );
}
