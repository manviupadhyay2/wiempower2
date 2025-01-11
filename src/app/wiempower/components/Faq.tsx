'use client';

import React, { useState, useRef, useEffect } from "react";
import { WIEFAQDATA } from "src/constants/index";

interface FAQItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

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
                                border border-purple-500/20 
                                ${openIndex === index ? 'border-purple-700/40' : ''}`}
                        >
                            <div
                                className={`flex justify-between items-center p-4 cursor-pointer 
                                    ${openIndex === index ? 'bg-purple-500/10' : 'hover:bg-purple-500/5'}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3
                                    className={`text-lg font-medium pr-8 text-white ${openIndex === index
                                        ? 'bg-gradient-to-r from-[#7042f8] to-[#00c6ff] bg-clip-text text-transparent'
                                        : ''}`}
                                >
                                    {faq.question}
                                </h3>
                                <span
                                    className={`text-purple-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    ▼
                                </span>
                            </div>

                            <div
                                ref={(el) => { contentRefs.current[index] = el; }}
                                className={`overflow-hidden transition-all duration-500 ease-in-out 
                                    ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{
                                    maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                                }}
                            >
                                <div className="p-4 bg-gradient-to-b from-pink-500/5 to-transparent">
                                    <div className="text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
