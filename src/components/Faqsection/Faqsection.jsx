import React, { useState } from 'react'
import './Faqsection.css'
import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'
const Faqsection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            question: "API calls per month",
            answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            question: "Operators connected",
            answer: "We have a network of operators spanning over 200 countries, ensuring global coverage and reliability for your messaging needs."
        },
        {
            question: "API uptime",
            answer: "Our API boasts a 99.9% uptime, ensuring that your messages are delivered without interruption."
        },
        {
            question: "SMS sent per month",
            answer: "Our system handles millions of SMS messages per month, providing scalable solutions for businesses of all sizes."
        },
        {
            question: "OTP sent per month",
            answer: "We send millions of one-time passwords (OTPs) every month, offering secure and reliable authentication services."
        }
    ];

    // Toggle the open state of an FAQ
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <section className="faq">
            <div className="faq-accordion">
                <h2>Frequently asked questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="faq-question">
                            <img
                                src={openIndex === index ? minusIcon : plusIcon}
                                alt={openIndex === index ? 'Collapse' : 'Expand'}
                                className="faq-icon"
                            />
                            {faq.question}
                        </div>
                        {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
                <button className="view-all-faqs">View all faq's</button>
            </div>
        </section>
    );
};

export default Faqsection
