'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-[90%] max-w-md bg-gradient-to-br from-[#030014] to-[#2A0E61] p-6 rounded-xl border border-purple-500/30 shadow-lg"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="text-center space-y-6 pt-4">
                    {/* Title with gradient text */}
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                            WIEMPOWER 6.0
                        </h2>
                        <p className="text-xl text-white font-semibold animate-pulse">
                            IS BACK!
                        </p>
                    </div>

                    {/* Register Button */}
                    <Link href="./wiempower">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg
                       shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        >
                            REGISTER HERE
                        </motion.button>
                    </Link>

                    {/* Decorative elements */}
                    <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PopUp;