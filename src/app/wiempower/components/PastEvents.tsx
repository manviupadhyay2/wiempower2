import React from 'react';
import { motion } from 'framer-motion';
import { PASTEVENTS } from '@/constants';

const PastEvents = () => {
    return (
        <div className="relative overflow-hidden py-20 bg-gradient-to-b from-purple-950 via-black to-black">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white mb-4 text-center">
                Glimpse of Our Past WIEmpower
                <span className="block mt-2 h-1 w-20 mx-auto bg-pink-500 rounded"></span>
            </h2>

            {/* Slider Container */}
            <motion.div
                className="flex py-8"
                animate={{
                    x: ['0%', '-100%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 15,
                        ease: 'linear',
                    },
                }}
            >
                {/* Render all the images from PASTEVENTS */}
                {PASTEVENTS.map((image, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 w-[20%] mx-4 relative transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-lg z-10"></div>
                        <img
                            src={image.src}
                            alt={image.description || `Past Event ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 text-white z-20">
                            <h4 className="text-lg font-semibold">
                                Event {index + 1}
                            </h4>
                        </div>
                    </div>
                ))}

                {/* Repeat the images */}
                {PASTEVENTS.map((image, index) => (
                    <div
                        key={index + PASTEVENTS.length}
                        className="group flex-shrink-0 w-[20%] mx-4 relative transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-lg z-10"></div>
                        <img
                            src={image.src}
                            alt={image.description || `Past Event ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 text-white z-20">
                            <h4 className="text-lg font-semibold">
                                Event {index + 1}
                            </h4>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* CTA */}
            <div className="text-center mt-8">
                <button className="px-6 py-2 text-lg font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg">
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default PastEvents;
