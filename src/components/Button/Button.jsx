import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, link }) {
    return (
        <div className={styles["button-container"]}>
            <a
                className={`${styles["button-block"]} ${styles["button-glow"]}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </div>
    );
}
