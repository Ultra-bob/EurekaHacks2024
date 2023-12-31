import "@/styles/globals.css";
import { Fira_Sans } from "next/font/google";

const scp = Fira_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
    return (
        <div className={scp.className}>
            <Component {...pageProps} />
        </div>
    );
}
