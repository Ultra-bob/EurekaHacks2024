import React from "react";
import styles from "@/styles/index.module.css";
import { motion } from "framer-motion";

import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import NavBar from "@/components/NavBar/Navbar";
import Stats from "@/components/Stats/Stats";
import Why from "@/components/Why/Why";
import Team from "@/components/Team/Team";

const hrFadeIn = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { duration: 1 },
    },
    viewport: { once: true, amount: 0.8 },
};

export default function Home() {
    const hr = (
        <motion.div {...hrFadeIn}>
            <hr />
        </motion.div>
    );
    return (
        <>
            <NavBar />
            <Header />
            <div className={styles.home_content}>
                {hr}
                <About />
                <Stats />
                {hr}
                {<Why />}
                {hr}
                <Sponsors />
                {hr}
                <FAQ />
                <motion.div {...hrFadeIn}>
                    <hr />
                </motion.div>
                <Team />
            </div>
            <Footer />
        </>
    );
}
