import React from "react";

export default function SponsorBox({ name, tier, image, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className={`${tier}-tier sponsorbox`}
            rel="noopenner noreferrer"
        >
            <img src={image} alt={name} />
        </a>
    );
}
