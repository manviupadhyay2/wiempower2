import React from 'react';
import { motion } from 'framer-motion';
import { PASTEVENTS } from '@/constants';
import Image from 'next/image';

const PastEvents = () => {
    return (
        <section className='py-20 md:py-24'>
            <div className='relative container'>
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-white py-6">
                    Glimpse of Our Past Events
                </h2>

                {/* Slider Container */}
                <div className='relative overflow-hidden rounded-3xl'>
                    {/* Gradient overlays for slider edges */}
                    <div className='absolute inset-y-0 left-0 w-1/3 -ml-10 bg-gradient-to-r from-[#7042f861] to-transparent z-20 pointer-events-none'></div>
                    <div className='absolute inset-y-0 right-0 w-1/3 -mr-10 bg-gradient-to-l from-[#7042f861] to-transparent z-20 pointer-events-none'></div>

                    {/* Animated sliding div */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear"
                        }}
                        className='flex gap-8 md:gap-12'
                    >
                        {/* Loop through the PASTEVENTS list */}
                        {[...PASTEVENTS, ...PASTEVENTS].map((event, index) => (
                            <div key={index} className="flex-shrink-0 w-[25%] mx-4 relative">
                                <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div> {/* Shadow effect */}
                                <Image
                                    src={event.src}
                                    alt={`Past Event ${index + 1}`}
                                    width={340} // Increased width
                                    height={200} // Increased height
                                    className='object-cover rounded-3xl transform transition-transform duration-300 group-hover:scale-110'
                                    unoptimized
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
