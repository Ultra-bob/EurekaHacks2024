import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"
import Member from "./Member"
import { members } from "./Members"
import styles from "./Team.module.css";
import Logo from "@/../public/EurekaIcon2024.png";

import shape1 from "@/../public/Shapes/shape1.png"
import hex1 from "@/../public/Shapes/hex1.png"

export default function Team() {
    return (
        <section id="team" className={styles.team}>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <motion.div
                        initial={{ y: -80, opacity: 0 }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: { delay: 0.5, duration: 1 },
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                        style={{ textAlign: "center" }}
                    >
                    <div className={styles.title}>
                        <h1>EUREKA!</h1>
                        <h2>HACKS</h2>
                    </div>

                    <h2 className={styles.sectionTitle}>Meet the Team</h2>
                    </motion.div>
                </div>

                {members.map((info, index) => {
                    return <Member {...info} key={index} />
                })}

                <div className={styles.logo}>
                    <Image
                        className={styles.icon}
                        src={Logo}
                        alt="Eureka! Icon"
                    />
                </div>

            </div>

            <Image className={styles.shape1} src={shape1} />
            <Image className={styles.hex1} src={hex1} />
            
        </section>

    );
}