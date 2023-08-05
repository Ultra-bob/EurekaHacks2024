import React from "react";
import { useState, useEffect } from "react";
import "./FAQTerminal.css";

export default function Answer({ hidden, answer, setFinishedTyping }) {
    const [displayAnswer, setDisplayAnswer] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    let delay = 15;

    useEffect(() => {
        if (!hidden && currentIndex < answer.length) {
            const timeout = setTimeout(() => {
                setDisplayAnswer(previous => previous.slice(0, currentIndex) + answer[currentIndex] + " _");
                setCurrentIndex(previousIndex => previousIndex + 1);
                if (currentIndex === answer.length - 1) {
                    setDisplayAnswer(previous => previous.slice(0, currentIndex +  1));
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

    return (
        <span className="text">{displayAnswer}</span>
    );
}