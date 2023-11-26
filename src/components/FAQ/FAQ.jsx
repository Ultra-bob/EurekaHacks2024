import FAQTerminal from "../FAQTerminal/FAQTerminal";
import { faq } from "./questions.js";
import styles from "./FAQ.module.css";
import { motion } from "framer-motion";

export default function FAQ() {
    const faqStuff = faq.map((data) => (
        <motion.div
            className={styles["faq-item"]}
            key={data.id}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.2 * data.id },
            }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <FAQTerminal question={data.question} answer={data.answer} />
        </motion.div>
    ));

    return (
        <section id="faq">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { duration: 1 },
                }}
                viewport={{ once: true, amount: 0.8 }}
                style={{ textAlign: "center" }}
            >
                Frequently Asked Questions
            </motion.h2>
            <div className={styles.faq}>{faqStuff}</div>
        </section>
    );
}
