import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";  // Icons

// Declare EventItem interface
interface EventItem {
    date: string;
    title: string;
    description: string;
}

// Sample event data
const EVENTS: EventItem[] = [
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

// TimelineItem component for each event
const TimelineItem = ({ event, index, progress, isLargeScreen }: {
    event: EventItem;
    index: number;
    progress: number;
    isLargeScreen: boolean;
}) => {
    const isLeft = index % 2 === 0;
    const shouldShow = progress >= index / EVENTS.length;

    const contentClasses = `
        w-full 
        ${isLargeScreen
            ? `lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`
            : 'pl-8'
        }
    `;

    const linePosition = isLargeScreen
        ? "lg:left-1/2 lg:-translate-x-1/2"
        : "left-4";

    return (
        <motion.div
            className={`relative flex flex-col ${isLargeScreen ? `lg:flex-row ${!isLeft && 'lg:flex-row-reverse'}` : ''} items-start mb-12`}
            initial={{ opacity: 0, x: isLargeScreen ? (isLeft ? -50 : 50) : -30 }}
            animate={{ opacity: shouldShow ? 1 : 0, x: shouldShow ? 0 : (isLargeScreen ? (isLeft ? -50 : 50) : -30) }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Circle indicator */}
            <motion.div
                className={`absolute ${linePosition} w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 z-10`}
                initial={{ scale: 0 }}
                animate={{ scale: shouldShow ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            >
                {shouldShow && (
                    <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full -left-2 -top-2 animate-ping"
                        style={{ animationDuration: '3s' }} />
                )}
            </motion.div>

            <div className={contentClasses}>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-lg border border-blue-500/20 
                             hover:border-purple-500/40 transition-colors duration-300
                             backdrop-blur-sm hover:backdrop-blur-lg
                             shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                    {/* Highlighted date */}
                    <div className="text-emerald-400 text-lg font-semibold mb-2">
                        {event.date}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 
                                 bg-clip-text text-transparent mb-2 sm:mb-3">
                        {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {event.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// Main Timeline component
const Timeline: React.FC = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [progress, setProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setProgress(Math.max(progress, latest));
        });
        return () => unsubscribe();
    }, [scrollYProgress, progress]);

    return (
        <div id="timeline" className="min-h-screen bg-black overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 text-center"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 mb-4 sm:mb-6 flex items-center justify-center space-x-2">
                        <FaCalendarAlt className="text-3xl text-purple-400" />
                        <span>Hackathon Schedule</span>
                    </h1>
                </motion.div>

                <div ref={timelineRef} className="relative">
                    {/* Static vertical line */}
                    <div
                        className={`absolute w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full
                                  ${isLargeScreen ? 'lg:left-1/2 lg:-translate-x-1/2' : 'left-4'}`}
                        style={{
                            top: 0,
                            height: '100%'
                        }}
                    />

                    {EVENTS.map((event, index) => (
                        <TimelineItem
                            key={index}
                            event={event}
                            index={index}
                            progress={progress}
                            isLargeScreen={isLargeScreen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
