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
                <select className={styles.dropdown} name="grade" required>
                    <option value="" disabled selected hidden>Grade</option>
                        <option className={styles.options} value="0">9</option>
                        <option className={styles.options} value="1">10</option>
                        <option className={styles.options} value="2">11</option>
                        <option className={styles.options} value="3">12</option>
                </select>
                <div className={styles.check}>
                    <input type="checkbox" id="idk" required></input>
                    <label className={styles.label} for="idk">lorem ipsum idk</label>
                </div>
            </div>
        </section>
    );
}