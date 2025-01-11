import React from "react";
import { motion } from "framer-motion";
import { Heart, Wallet, Leaf, GraduationCap, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Track {
    icon: React.ElementType;
    title: string;
    description: string;
}

const TRACKS_DATA: Track[] = [
    {
        icon: Heart,
        title: "Quantum Exploration",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec neque tristique luctus. Integer at purus vitae arcu venenatis facilisis.",
    },
    {
        icon: Wallet,
        title: "Digital Frontiers",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim sit amet erat egestas accumsan a at nunc. Suspendisse sit amet sem ac ante sollicitudin.",
    },
    {
        icon: Leaf,
        title: "Virtual Horizons",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis purus in nulla placerat, sed auctor purus dignissim. Integer id orci sit amet nisl auctor suscipit.",
    },
    {
        icon: GraduationCap,
        title: "Innovation Unleashed",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ligula ac turpis vehicula gravida id sed elit. Nulla facilisi. Mauris bibendum nulla et neque pretium.",
    },
    {
        icon: Users,
        title: "Future Pathways",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada, lectus eu tincidunt mollis, libero lorem tincidunt erat, id efficitur leo justo at felis.",
    },
];

interface TrackCardProps {
    track: Track;
    index: number;
}

// Component for each track card with enhanced animation
const TrackCard: React.FC<TrackCardProps> = ({ track, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 25,
            }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-transparent
                 group hover:scale-110 hover:shadow-2xl hover:rotate-6
                 hover:border-transparent hover:transition-all duration-500
                 flex flex-col items-center text-center group-hover:cursor-pointer
                 relative overflow-hidden"
        >
            {/* Gradient Border Animation */}
            <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent 
                 group-hover:border-2 group-hover:border-purple-500 transition-all duration-500"></div>

            <motion.div
                className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center
                    mb-4 group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
            >
                <track.icon className="w-8 h-8 text-purple-200 group-hover:text-white transition-colors duration-300" />
            </motion.div>

            <motion.h3
                className="text-xl font-semibold text-gray-200 mb-3 group-hover:text-white 
                    transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {track.title}
            </motion.h3>

            {/* Updated description styling with fade-in */}
            <motion.p
                className="text-gray-300 leading-relaxed group-hover:text-gray-100 
                transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {track.description}
            </motion.p>
        </motion.div>
    );
};

// Main Theme component with in-view animations
const Theme: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when the section comes into view
        threshold: 0.2, // When 20% of the section is visible
    });

    return (
        <div className="min-h-screen bg-black p-8" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    }}
                    className="mb-16 text-center"
                >
                    <h2
                        className="text-5xl font-extrabold text-center mb-12 
                        bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-white"
                    >
                        Hackathon Tracks
                    </h2>
                    <p className="text-white text-lg max-w-2xl mx-auto">
                        Choose from five innovative tracks designed to create meaningful
                        impact across different sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {TRACKS_DATA.map((track, index) => (
                        <TrackCard key={index} track={track} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Theme;
