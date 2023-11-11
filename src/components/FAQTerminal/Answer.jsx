import React, { useState, useEffect } from "react";
import styles from "./FAQTerminal.module.css";

export default function Answer({ hidden, answer, setFinishedTyping }) {
    const [displayAnswer, setDisplayAnswer] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    let delay = 1000 / answer.length;

    useEffect(() => {
        if (!hidden && currentIndex < answer.length) {
            const timeout = setTimeout(() => {
                setDisplayAnswer((previous) => {
                    const updatedAnswer =
                        previous.slice(0, currentIndex) +
                        answer[currentIndex] +
                        " _";
                    return updatedAnswer;
                });
                setCurrentIndex((previousIndex) => previousIndex + 1);
                if (currentIndex === answer.length - 1) {
                    setDisplayAnswer((previous) =>
                        previous.slice(0, currentIndex + 1),
                    );
                    setFinishedTyping(true);
                }
            }, delay);

            return () => clearTimeout(timeout);
        }
        if (hidden) {
            setDisplayAnswer("");
            setCurrentIndex(0);
        }
    }, [currentIndex, delay, displayAnswer, hidden, answer, setFinishedTyping]);

    return <span className={styles.text}>{displayAnswer}</span>;
}
