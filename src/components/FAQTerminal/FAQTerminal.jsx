import React, { useState } from "react";
import styles from "./FAQTerminal.module.css";

import Answer from "./Answer";
import Question from "./Question";
import Clear from "./Clear";

export default function FAQTerminal({ question, answer }) {
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
        <div
            className={styles["faq-terminal"]}
            onClick={handleClick}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
        >
            <div className={styles["terminal-bar"]}>
                <div className={styles["red-circle"]} />
                <div className={styles["yellow-circle"]} />
                <div className={styles["green-circle"]} />
            </div>
            <div className={styles["content"]}>
                <code>
                    <span className={styles["user"]}>eureka@hacker:~$ </span>
                    <Question
                        hidden={hidden}
                        question={question}
                        hovered={isHovered}
                    />
                    <br />
                    <Answer
                        hidden={hidden}
                        answer={answer}
                        setFinishedTyping={setFinishedTyping}
                    />
                    <Clear
                        hidden={hidden}
                        hovered={isHovered}
                        finishedTyping={finishedTyping}
                    />
                </code>
            </div>
        </div>
    );
}
