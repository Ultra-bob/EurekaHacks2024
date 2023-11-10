"use client";

import "./FAQ.css";
import FAQTerminal from "../FAQTerminal/FAQTerminal";
import { faq } from "./questions.js";

export default function FAQ() {
    const faqStuff = faq.map((data) => (
        <div className="faq-item" key={data.id}>
            <FAQTerminal question={data.question} answer={data.answer} />
        </div>
    ));

    return (
        <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq">{faqStuff}</div>
        </section>
    );
}