import React from "react";
import styles from "@/app/page.module.css";



import FAQ from "@/app/components/FAQ/FAQ";
import Header from "@/app/components/Header/Header";
import About from "@/app/components/About/About";
import Sponsors from "@/app/components/Sponsors/Sponsors";
import NavBar from "./components/NavBar/Navbar";

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
        </>
    );
}
