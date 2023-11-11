import { useState, useEffect } from "react";
import styles from "./FAQTerminal.module.css";

export default function Clear({ hidden, hovered, finishedTyping }) {
    const [command, setCommand] = useState("clear");

    useEffect(() => {
        if (hovered && !hidden && command.length < "clear_".length) {
            setCommand(command + "_");
        }
        if (!hovered) {
            setCommand("clear");
        }
    }, [hovered, hidden, command]);

    if (!hidden && finishedTyping) {
        return (
            <>
                <br />
                <span className={styles["user"]}>eureka@hacker:~$ </span>
                <span className={styles["text"]}>{command}</span>
            </>
        );
    }

    return null; // Return null when the conditions aren't met
}
