'use client';

import React, { useState } from "react";
import { WIEFAQDATA } from "src/constants/index";

interface FAQItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center mb-12 
                    bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {WIEFAQDATA.map((faq: FAQItem, index: number) => (
                        <div
                            key={index}
                            className={`bg-[#0a0a0a] shadow-lg rounded-xl overflow-hidden 
                                border border-pink-500/20 
                                ${openIndex === index ? 'border-pink-500/40' : ''}`}
                        >
                            <div
                                className={`flex justify-between items-center p-4 cursor-pointer 
                                    ${openIndex === index ? 'bg-pink-500/10' : 'hover:bg-pink-500/5'}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className={`text-lg font-medium pr-8
                                    ${openIndex === index ? 'text-pink-400' : 'text-white'}`}>
                                    {faq.question}
                                </h3>
                                <span className={`text-pink-500 
                                    ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>

                            {openIndex === index && (
                                <div className="bg-gradient-to-b from-pink-500/5 to-transparent p-4">
                                    <div className="text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}