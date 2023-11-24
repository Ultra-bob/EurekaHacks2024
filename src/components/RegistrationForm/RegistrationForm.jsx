import React from "react";
import styles from "./RegistrationForm.module.css";
import "../../pages/_app.jsx";



export default function RegistrationForm() {
    return (
        <section className={styles.form}>
            <div className={styles.banner}>
                <h2>SIGN UP</h2>
            </div>

            <div>
                <input className={styles.field} type="text" placeholder="Full Name" name="name" required></input>
                <input className={styles.field} type="text" placeholder="Email" name="email"  required></input>
                <select className={styles.dropdown} name="grade" required>
                    <option value="" disabled selected hidden>Grade</option>
                        <option className={styles.options} value="0">8</option>
                        <option className={styles.options} value="1">9</option>
                        <option className={styles.options} value="2">10</option>
                        <option className={styles.options} value="3">11</option>
                        <option className={styles.options} value="4">12</option>
                </select>

                <div className={styles.check}>
                    <input type="checkbox" name="idk" required></input>
                    <label className={styles.label}>I have joined lorem ipsum</label>
                </div>

                <input className={styles.field} type="text" placeholder="Discord ID" name="discord"  required></input>
                <input className={styles.field} type="text" placeholder="School Name" name="school"  required></input>

                <table className={styles.multicheck}>
                    <h4>Select any dietary restrictions which apply</h4>
                    <tbody>
                        <tr>
                            <div className={styles.check}>
                                <input className={styles.check} type="checkbox" name="idk"></input>
                                <label className={styles.label}>Pi</label>
                            </div>
                        </tr>
                        <tr>
                            <div className={styles.check}>
                                <input className={styles.check} type="checkbox" name="idk"></input>
                                <label className={styles.label}>Phi</label>
                            </div>
                        </tr>
                        <tr>
                            <div className={styles.check}>
                                <input className={styles.check} type="checkbox" name="idk"></input>
                                <label className={styles.label}>Psi</label>
                            </div>
                        </tr>
                    </tbody>
                </table>
                <table className={styles.multicheck}>
                    <tbody>
                    <tr>
                        <div className={styles.check}>
                            <input className={styles.check} type="checkbox" name="idk"></input>
                            <label className={styles.label}>I would like to 呵</label>
                        </div>
                    </tr>
                    <tr>
                        <div className={styles.check}>
                            <input className={styles.check} type="checkbox" name="idk" required></input>
                            <label className={styles.label}>I grant required</label>
                        </div>
                    </tr>
                    <tr>
                        <div className={styles.check}>
                            <input className={styles.check} type="checkbox" name="idk"></input>
                            <label className={styles.label}>I have attended の 2023</label>
                        </div>
                    </tr>
                    <tr>
                        <div className={styles.check}>
                            <input className={styles.check} type="checkbox" name="idk"></input>
                            <label className={styles.label}>I am looking for 呣</label>
                        </div>
                    </tr>
                    <tr>
                        <div className={styles.check}>
                            <input className={styles.check} type="checkbox" name="idk" required></input>
                            <label className={styles.label}>I agree to the required</label>
                        </div>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}