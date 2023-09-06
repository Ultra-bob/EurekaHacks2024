import React from "react";
import { useState, useEffect } from "react";
import "./FAQTerminal.css";

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
                <span className="user">eureka@hacker:~$ </span>
                <span className="text">{command}</span>
            </>
        );
    }
}
