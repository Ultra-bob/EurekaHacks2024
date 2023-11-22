import React from "react";
import styles from "./RegistrationForm.module.css";
import "../../pages/_app.jsx";

export default function RegistrationForm() {
    return (
        <section className={styles.form}>
            <div className={styles.banner}>
                <h2>SIGN UP</h2>
            </div>

            <div >
                <input className={styles.field} type="text" placeholder="Name" name="name" required></input>
                <input className={styles.field} type="text" placeholder="Email" name="email"  required></input>
                <select className={styles.field} name="grade" placeholder="Grade"></select>
            </div>
        </section>
    );
}