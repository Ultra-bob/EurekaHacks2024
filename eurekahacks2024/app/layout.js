import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/*
<meta name="theme-color" content="#22F0E7" />
        <!-- <meta name="twitter:card" content="summary_large_image">` -->
        <meta property="og:title" content="EurekaHacks" />
        <meta property="og:type" content="website" />
        <!-- <meta property="og:url" content="" /> EDIT THIS LATER-->
        <meta property="og:image" content="https://i.imgur.com/pPsYsv6.png" />
        <meta
            property="og:description"
            content="Official Site for the 2024 Eureka Hackathon."
        />
        <meta
            property="description"
            content="Official site for the 2024 Eureka Hackathon, hosted by Eureka Hacks."
        />
*/

export const metadata = {
    title: "EurekaHacks 2024",
    description:
        "Official site for the 2024 Eureka Hackathon, hosted by Eureka Hacks.",
    image: "https://i.imgur.com/pPsYsv6.png",
    // url: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
