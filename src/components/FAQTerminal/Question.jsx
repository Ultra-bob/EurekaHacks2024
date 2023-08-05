import React from "react";
import { useState, useEffect } from "react";
import "./FAQTerminal.css";

export default function Question({ hidden, question, hovered }) {
    const [displayQuestion, setDisplayQuestion] = useState(question);

    useEffect(() => {
        if (hovered && hidden) {
            setDisplayQuestion(previous => previous + "_");
        } else {
            setDisplayQuestion(question);
        }
    }, [hovered, hidden, question]);

    return (
        <span className="question">{displayQuestion}</span>
    );
}