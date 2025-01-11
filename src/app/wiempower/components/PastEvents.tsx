import React from 'react';
import { motion } from 'framer-motion';
import { PASTEVENTS } from '@/constants';

const PastEvents = () => {
    return (
        <div className="relative overflow-hidden py-20 bg-black"> {/* Set the background to black */}
            {/* Heading */}
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white mb-4 text-center">
                Glimpse of Our Past WIEmpower
            </h2>

            {/* Sliding Image Container */}
            <motion.div
                className="flex py-8"
                animate={{
                    x: ['0%', '-100%'], // Slide to the left
                }}
                transition={{
                    x: {
                        repeat: Infinity, // Repeat infinitely
                        repeatType: 'loop', // Loop back to start after it slides off
                        duration: 15, // Time to slide across
                        ease: 'linear', // Smooth, continuous transition
                    },
                }}
            >
                {/* Render all the images from PASTEVENTS */}
                {PASTEVENTS.map((image, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 w-[20%] mx-4 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-lg z-10"></div>
                        <img
                            src={image.src}
                            alt={`Past Event ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                    </div>
                ))}

                {/* Repeat the images to create a continuous loop */}
                {PASTEVENTS.map((image, index) => (
                    <div
                        key={index + PASTEVENTS.length}
                        className="group flex-shrink-0 w-[20%] mx-4 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-lg z-10"></div>
                        <img
                            src={image.src}
                            alt={`Past Event ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default PastEvents;
