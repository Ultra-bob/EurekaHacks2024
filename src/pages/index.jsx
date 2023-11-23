import React from "react";
import styles from "@/styles/index.module.css";
import { motion } from "framer-motion";

import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import NavBar from "@/components/NavBar/Navbar";

// // initial={{ x: 100, opacity: 0 }}
// whileInView={{
//     x: 0,
//     opacity: 1,
//     transition: { delay: 0.5, duration: 1 },
// }}
// viewport={{ once: true, amount: 0.8 }}
const hrFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <div className={styles.home_content}>
                <motion.div {...hrFadeIn}>
                    <hr />
                </motion.div>
                <About />
                <motion.div {...hrFadeIn}>
                    <hr />
                </motion.div>
                <Sponsors />
                <motion.div {...hrFadeIn}>
                    <hr />
                </motion.div>
                <FAQ />
            </div>
            <Footer />
        </>
    );
}
