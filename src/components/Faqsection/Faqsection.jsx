import React, { useState } from 'react'
import './Faqsection.css'
import plusIcon from '../../assets/plusIcon.svg'
import minusIcon from '../../assets/minusIcon.svg'
const Faqsection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            question: "How many API calls can I make per month?",
            answer: "You can make as many API calls as your business requires. During the trial, we'll provide comprehensive support, including a personalized 30-minute onboarding session to help you integrate our services into your system efficiently and ensure you're up and running in no time."
        },
        {
            question: "How many operators are connected?",
            answer: "We have established a vast network of over 200 operators across the globe, providing coverage in nearly every country. This ensures that no matter where your business operates or where your customers are located, we can deliver messages quickly and reliably. Our global reach ensures that we can meet the communication needs of businesses from any industry, anywhere in the world."
        },
        {
            question: "What is the API uptime?",
            answer: "We take reliability seriously and guarantee a 99.9% API uptime. This means that our service is operational almost 24/7, with minimal downtime, ensuring seamless messaging. Whether you're sending time-sensitive notifications, promotional messages, or important updates, you can count on our API to deliver consistently without interruptions."
        },
        {
            question: "How many SMS messages are sent per month?",
            answer: "Our system is built to handle high volumes, sending millions of SMS messages every month for businesses ranging from small startups to large enterprises. This scalability means we can grow with your business, whether you're sending a few hundred messages or millions. Our platform is designed for reliability and speed, ensuring that your messages reach their recipients quickly and efficiently."
        },
        {
            question: "How many OTPs are sent per month?",
            answer: "Security is at the core of our services, and we process millions of one-time passwords (OTPs) every month for businesses worldwide. These OTPs are used for secure user authentication, ensuring that your customers can access their accounts or verify transactions safely. Our system is optimized to handle large volumes without compromising speed or security, making sure that OTPs are delivered instantly to users, even during peak times."
        }
    ];


    // Toggle the open state of an FAQ
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <section className="faq">
            <div className="header-content">
                <button className='head-section-b6'>FAQ</button>
            </div>
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
