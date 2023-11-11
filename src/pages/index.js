import React from "react";
import styles from "@/styles/Home.module.css";

import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Sponsors from "@/components/Sponsors/Sponsors";
import NavBar from "@/components/NavBar/Navbar";

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <div className={styles.home_content}>
                <hr />
                <About />
                <hr />
                <Sponsors />
                <hr />
                <FAQ />
            </div>
            <Footer />
        </>
    );
}
