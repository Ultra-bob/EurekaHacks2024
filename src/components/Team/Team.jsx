import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"
import Member from "./Member"
import { members } from "./Members"
import styles from "./Team.module.css";
import Logo from "@/../public/EurekaIcon2024.png";
import useOnScreen from "@/hooks/useOnScreen";

export default function Team() {
    const gridRef = useRef(null);
    const isOnScreen = useOnScreen(gridRef);

    useEffect(() => {
        let grid = gridRef.current;

        if (isOnScreen && !grid.classList.contains(styles.active)) {
            grid.classList.add(styles.active);
            let gridRect = grid.getBoundingClientRect();
            for (let child of grid.children) {
                if (!child.classList.contains(styles.text) && ! child.classList.contains(styles.logo)) {
                    const rect = child.getBoundingClientRect();
                    let gridX = Math.floor((rect.x - gridRect.x) / rect.width);
                    let gridY = Math.floor((rect.y - gridRect.y) / rect.height);
                    child.style.animationName = styles.fadeIn;
                    child.style.animationDelay = `${(gridX + gridY) * 100 + 1000}ms`;
                }
            }
        }
    }, [isOnScreen])

    return (
        <section id="team" className={styles.team}>
            <div className={styles.grid} ref={gridRef}>
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

            <img className={styles.shape1} src="Shapes/shape1.png" />
            <img className={styles.hex1} src="Shapes/hex1.png" />
            
        </section>

    );
}