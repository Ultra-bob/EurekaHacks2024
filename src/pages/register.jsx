import Head from "next/head";
import styles from "@/styles/register.module.css";
import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export default function Register() {
    return (
        <div className={styles.tally}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <title>EurekaHACKS 2024 Registration Form</title>
            </Head>
            <NavBar />
            <iframe
                data-tally-src="https://tally.so/embed/nGlK5o?transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="2464"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="EurekaHACKS 2024 Registration Form"
            />
            <Footer />
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
        </div>
    );
}
