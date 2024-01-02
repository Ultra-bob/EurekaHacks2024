import Head from "next/head";
import styles from "@/styles/register.module.css";

export default function Register() {
    return (
        <div className={styles.tally}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <title>EurekaHACKS 2024 Registration Form</title>
                <script async src="https://tally.so/widgets/embed.js"></script>
                <style>
                    {`
                        html { margin: 0; height: 100%; overflow: hidden; }
                        iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
                    `}
                </style>
            </Head>
            <iframe
                data-tally-src="https://tally.so/r/nGlK5o?transparentBackground=1"
                width="100%"
                height="100%"
                title="EurekaHACKS 2024 Registration Form"
            ></iframe>
        </div>
    );
}
