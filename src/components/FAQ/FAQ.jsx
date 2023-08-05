import React from "react";
import "./FAQ.css";
import FAQTerminal from "../FAQTerminal/FAQTerminal";

export default function FAQ() {
    const faq = {
        "What is a hackathon?": " A hackathon is an event where participants work together in teams to brainstorm, develop, and prototype software solutions or projects that aim to address a specific problem or challenge.",
        "Who can participate?": "Any high school student in Canada can participate, exceptions can be made for elementary students though!",
        "What do I need to bring?": "You should bring a laptop, charger, don't worry about teams and projects, we'll help you with that!",
        "How much does it cost?": "It's completely free! We'll even provide cool swag, food, and prizes for non hackathon related competitions!",
        "How will teams work?": "Teams can be up to 4 people, or solo if you want to work alone! We'll help you find a team if you don't have one.",
        "Do I need to know how to code?": "Coding experience is not a requirement to participate in our hackathon. We welcome people with a range of skills such as marketing, design, and more. Participants are also encouraged to form teams to complement each other's strengths and skill sets.",
    }

    return (
        <div className="faq">
            {Object.keys(faq).map((key) => {
                return (
                    <div className="faq-item">
                        <FAQTerminal key={key} question={key} answer={faq[key]} />
                    </div>
                );
            })
            }
        </div>
    );
}