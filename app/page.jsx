import React from "react";
import styles from "@/styles/page.module.css";

import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.home_content}>
                <hr />
                <About />
                <hr />
                <Sponsors />
                <hr />
                <FAQ />
            </div>
        </>
    );
}
