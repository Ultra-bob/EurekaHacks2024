import React from "react";
import { useState } from "react";
import "./FAQTerminal.css";

import Answer from "./Answer";
import Question from "./Question";
import Clear from "./Clear";

export default function FAQTerminal({ question, answer}) {
    const [hidden, setHidden] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [finishedTyping, setFinishedTyping] = useState(false);

    function handleClick() {
        setHidden(!hidden);
        if (hidden) {
            setFinishedTyping(false);
        }
    }

    function handleHoverEnter() {
        setIsHovered(true);
    }

    function handleHoverLeave() {
        setIsHovered(false);
    }

    return (
        <div className="faq-terminal" onClick={handleClick} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
            <div className="terminal-bar">
                <div className="red-circle" />
                <div className="yellow-circle" />
                <div className="green-circle" />
            </div>
            <div className="content">
                <code>
                    <span className="user">eureka@hacker:~$ </span>
                    <Question hidden={hidden} question={question} hovered={isHovered}/>
                    <br />
                    <Answer hidden={hidden} answer={answer} setFinishedTyping={setFinishedTyping}/>
                    <Clear hidden={hidden} hovered={isHovered} finishedTyping={finishedTyping}/>
                </code>
            </div>
        </div>
    );
}