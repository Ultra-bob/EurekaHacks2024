import React from "react";
import "./Button.css";

export default function Button({ text, link }) {
    return (
        <div className="button-container">
            <a className="button-block button-glow" href={link} target="_blank" rel="noopenner noreferrer">
                {text}
            </a>
        </div>
    );
}