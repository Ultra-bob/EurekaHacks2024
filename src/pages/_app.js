import "@/styles/globals.css";
import { Source_Code_Pro } from "next/font/google";

const scp = Source_Code_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <div className={scp.className}>
            <Component {...pageProps} />
        </div>
    );
}
