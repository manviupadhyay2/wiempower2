'use client';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <div className="relative w-32 h-32">
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 0.5, 1],
                        x: [0, 50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeatType: 'loop',
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: -360,
                        scale: [1, 0.5, 1],
                        x: [0, -50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeatType: 'loop',
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 0.5, 1],
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeatType: 'loop',
                    }}
                />
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full"
                    animate={{
                        rotate: -360,
                        scale: [1, 0.5, 1],
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeatType: 'loop',
                    }}
                />
            </div>
        </div>
    );
};

export default Loading;
