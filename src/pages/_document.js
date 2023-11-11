import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
    title: "EurekaHacks 2024",
    description:
        "Official site for the 2024 Eureka Hackathon, hosted by Eureka Hacks.",
    image: "https://i.imgur.com/pPsYsv6.png",
    // url: "",
};

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

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
