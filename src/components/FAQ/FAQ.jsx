import FAQTerminal from "../FAQTerminal/FAQTerminal";
import { faq } from "./questions.js";
import styles from "./FAQ.module.css";

export default function FAQ() {
    const faqStuff = faq.map((data) => (
        <div className={styles["faq-item"]} key={data.id}>
            <FAQTerminal question={data.question} answer={data.answer} />
        </div>
    ));

    return (
        <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faq}>{faqStuff}</div>
        </section>
    );
}
