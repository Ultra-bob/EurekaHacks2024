import Logo from "@/../public/EurekaIcon2024.png";
import Link from "next/link";
import styles from "@/components/HomeIcon/HomeIcon.module.css";
import Image from "next/image";

export default function HomeIcon() {
    return (
        <div className={styles["box"]}>
            <Link href="/">
                <Image
                    className={styles["icon"]}
                    src={Logo}
                    alt="Eureka! Icon"
                    href="../"
                />
            </Link>
        </div>
    )
}