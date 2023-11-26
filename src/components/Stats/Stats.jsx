import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import styles from "./Stats.module.css";

const cardAnim = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    whileHover: {
        scale: 1.1,
    },
    viewport: { once: true, amount: 0.8 },
};

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const countUpRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (countUpRef.current) {
            observer.observe(countUpRef.current);
        }

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, []);

    return (
        <section id="stats" className={styles.stats}>
            <div className={styles.grid}>
                <motion.div className={styles["card-1"]} {...cardAnim}>
                    <h2 className={styles.customh2} ref={countUpRef}>
                        {isVisible && (
                            <CountUp end={11} delay={0.5} formatting={true} />
                        )}
                    </h2>
                    <h3 className={styles.customh3}>Workshops</h3>
                </motion.div>
                <motion.div className={styles["card-2"]} {...cardAnim}>
                    <h2 className={styles.customh2} ref={countUpRef}>
                        {isVisible && <CountUp end={100} delay={0.7} />}+
                    </h2>
                    <h3 className={styles.customh3}>Participants</h3>
                </motion.div>
                <motion.div className={styles["card-3"]} {...cardAnim}>
                    <h2 className={styles.customh2} ref={countUpRef}>
                        $
                        {isVisible && (
                            <CountUp end={1500} delay={0.9} formatting={true} />
                        )}
                        +
                    </h2>
                    <h3 className={styles.customh3}>In Prizes</h3>
                </motion.div>
            </div>
        </section>
    );
}
