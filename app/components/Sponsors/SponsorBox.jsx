import Image from "next/image";

export default function SponsorBox({ name, image, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="sponsorbox"
            rel="noopenner noreferrer"
        >
            <Image src={image} alt={name} />
        </a>
    );
}
