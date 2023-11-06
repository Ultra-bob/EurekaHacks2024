import React from "react";
import "./About.css";
import AboutImage from "@/public/About/About.jpg";
import Image from "next/image";

export default function About() {
    return (
        <section id="about">
            <div className="about-left">
                <h2>Oakvilles Biggest Hackathon</h2>
                <p>
                    EurekaHACKS is an annual 12-hour hackathon hosted at Abbey
                    Park High School in Oakville, Canada. It is the largest high
                    school hackathon in this region and a great chance to
                    discover your potential with technology. Our exciting event
                    features workshops, fun activities, and over $1000 worth of
                    prizes! We're committed to inspiring students of all skill
                    levels to put their creativity and knowledge into practice
                    by giving them the tools they need to learn and create — no
                    prior experience required.
                </p>
                <p>
                    We recognize that young people have the potential to shape
                    our future through innovative tech solutions, so our mission
                    is to provide a platform where ambitious high schoolers can
                    explore their ideas and take tangible steps towards building
                    technological solutions for the world's biggest problems.
                    Our vision is for every student who participates in
                    EurekaHACKS to gain valuable skills while having some fun
                    along the way!
                </p>
            </div>
            <div className="about-right">
                <Image
                    className="about-image glow"
                    src={AboutImage}
                    alt="placeholder"
                />
            </div>
        </section>
    );
}
