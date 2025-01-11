import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface EventItem {
    date: string;
    title: string;
    description: string;
}

const EVENTDATA: EventItem[] = [
    {
        date: "31st December 2024",
        title: "Registration Opens",
        description: "Begin your journey by registering your team through our online portal. Ensure all team details and areas of interest are properly documented.",
    },
    {
        date: "5th January 2025",
        title: "Ideation Phase Begins",
        description: "Start brainstorming your innovative solutions. Teams can begin submitting their preliminary project proposals.",
    },
    {
        date: "7th January 2025",
        title: "Mentor Matching",
        description: "Connect with industry experts who will guide you throughout the hackathon. Virtual mentoring sessions become available.",
    },
    {
        date: "9th January 2025",
        title: "Workshop Day",
        description: "Participate in technical workshops and gain insights from industry leaders about emerging technologies and best practices.",
    },
    {
        date: "10th January 2025",
        title: "Registration Closes",
        description: "Last day to register your team. Make sure all your team details are finalized and submitted.",
    },
    {
        date: "11th January 2025",
        title: "Shortlisting Announced",
        description: "Selected teams will be notified and will receive detailed instructions for the main hackathon event.",
    },
];

const Timeline: React.FC = () => {
    const [lineHeight, setLineHeight] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const { top, height } = timelineRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollPosition = Math.max(0, windowHeight - top);
                const progress = Math.min(scrollPosition / (height + 200), 1);
                setLineHeight(height * progress);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="timeline" className="min-h-screen bg-black p-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 mb-6">
                        Hackathon Schedule
                    </h1>
                    <p className="text-purple-300 opacity-80 text-lg max-w-2xl">
                        Follow our carefully planned timeline to stay on track throughout the hackathon.
                        Each phase is designed to help you develop and refine your innovative solutions.
                    </p>
                </motion.div>

                <div ref={timelineRef} className="relative">
                    {/* Adjusted line to start at the first circle */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full"
                        style={{ top: "48px", height: 0 }}
                        animate={{ height: lineHeight - 48 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    {EVENTDATA.map((event, index) => {
                        const shouldShow = lineHeight > (index * timelineRef.current?.offsetHeight! / EVENTDATA.length);
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className={`relative flex items-center mb-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                initial={{
                                    opacity: 0,
                                    x: isLeft ? -100 : 100
                                }}
                                animate={{
                                    opacity: shouldShow ? 1 : 0,
                                    x: shouldShow ? 0 : (isLeft ? -100 : 100)
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.1
                                }}
                            >
                                {/* Circle with line intersection */}
                                <motion.div
                                    className={`absolute left-1/2 transform -translate-x-1/2 
                                              w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 z-10
                                              before:content-[''] before:absolute before:w-8 before:h-8 before:bg-blue-500/20 
                                              before:rounded-full before:-left-2 before:-top-2 before:animate-ping`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: shouldShow ? 1 : 0 }}
                                    transition={{
                                        duration: 0.3,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10
                                    }}
                                />

                                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"
                                    }`}>
                                    <motion.div
                                        className="p-6 bg-gray-900/50 rounded-lg border border-purple-500/20 
                                                 hover:border-purple-500/40 transition-all duration-300
                                                 backdrop-blur-sm hover:backdrop-blur-lg
                                                 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className="text-purple-400 text-sm font-medium mb-2">{event.date}</div>
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                                                     bg-clip-text text-transparent mb-3">{event.title}</h3>
                                        <p className="text-gray-300/80 leading-relaxed">{event.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;