import Image from "next/image";
import styles from "./Sponsors.module.css";

export default function SponsorBox({ name, image, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className={styles.sponsorbox}
            rel="noopenner noreferrer"
        >
            <Image src={image} alt={name} />
        </a>
    );
}
