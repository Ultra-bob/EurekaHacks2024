import React from "react";
import styles from "./Why.module.css";
import { motion } from "framer-motion";

const shapeFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
    },
    viewport: { once: true, amount: 1 },
};

export default function Why() {
    return (
        <motion.section
            id="why"
            className={styles.why}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <h2>No Experience? No Problem.</h2>
            <div className={styles.content}>
                <p>
                    Our Hackathon is open to all skill levels, from beginners to
                    experts. We provide workshops and mentors to help you learn
                    new skills and build something awesome. We encourage you to
                    learn new skills and try something new!
                </p>
            </div>
            {/* <div className={styles["shape-container"]}>
                <motion.div className={styles.shape1} {...shapeFadeIn} />
                <motion.div className={styles.shape2} {...shapeFadeIn} />
                <motion.div className={styles.shape3} {...shapeFadeIn} />
                <motion.div className={styles.shape4} {...shapeFadeIn} />
                <motion.div className={styles.shape5} {...shapeFadeIn} />
            </div> */}
        </motion.section>
    );
}
