import React from "react";

export default function SponsorBox({ name, image, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="sponsorbox"
            rel="noopenner noreferrer"
        >
            <img src={image} alt={name} />
        </a>
    );
}
