import React, { useState, useEffect } from "react";
import styles from "./FAQTerminal.module.css";

export default function Question({ hidden, question, hovered }) {
    const [displayQuestion, setDisplayQuestion] = useState(question);

    useEffect(() => {
        if (hovered && hidden) {
            setDisplayQuestion((previous) => previous + "_");
        } else {
            setDisplayQuestion(question);
        }
    }, [hovered, hidden, question]);

    return <span className={styles.question}>{displayQuestion}</span>;
}
