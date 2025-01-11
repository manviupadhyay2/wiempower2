import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { JUDGES } from "src/constants/index";
import Image from 'next/image';

const formatName = (name: string) => {
    const parts = name.split(' ');
    return parts.map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
};

const Judges = () => {
    return (
        <div id="judges" className="max-w-5xl mx-auto p-8 rounded-lg bg-transparent shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Our Judges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {JUDGES.map((judge, index) => (
                    <div
                        className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-transparent to-gray-900/90"
                        key={index}
                    >
                        {/* Profile Image Container */}
                        <div className="relative w-32 h-32 mx-auto mt-6 rounded-full overflow-hidden border-2 border-white/20">
                            <Image
                                src={judge.image}
                                alt={judge.name}
                                className="w-full h-full object-cover rounded-full"
                                loading="lazy"
                            />
                        </div>

                        {/* LinkedIn Icon */}
                        {judge.linkedin && (
                            <div className="absolute top-0 right-0 p-2">
                                <a
                                    href={judge.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center"
                                >
                                    <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-400 transition-colors duration-300" />
                                </a>
                            </div>
                        )}

                        {/* Content Container */}
                        <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center">
                            {/* Name and Profession */}
                            <div className="text-center mb-3">
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {formatName(judge.name)}
                                </h3>
                                <h4 className="text-sm text-gray-200 font-medium">
                                    {judge.profession}
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-300 text-center px-2 line-clamp-3">
                                {judge.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Judges;