import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/register.module.css";
import { signIn, useSession } from "next-auth/react"

export default function Register() {
    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn("google", { callbackUrl: "/register" });
        },
    });
    return (
        <>
            <NavBar />
            <div className={styles["header"]}>
                <div className={styles["header-content"]}>
                    <h1>Register</h1>
                </div>
            </div>
            <div className={styles.content}>
                <p>Content</p>
            </div>
            <Footer />
        </>
    );
}
