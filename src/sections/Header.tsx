'use client';

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Events, scrollSpy, scroller } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router";


const iconSize = 24;

const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const emailTo = "igdtuieee@gmail.com";
    const ccEmail = "igdtuieee@gmail.com";
    const subject = encodeURIComponent("Contact from Website");
    const body = encodeURIComponent("Hello IEEE IGDTUW Team,");

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;

    const newWindow = window.open(gmailLink, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert("It seems like the pop-up was blocked. Please allow pop-ups for this site.");
    }
};

const Socials = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={iconSize} color="#ffffff" />,
        link: "https://www.linkedin.com/company/ieee-igdtuw/",
        hoverColor: "#0077b5"
    },
    {
        name: "X",
        icon: <SiX size={iconSize} color="#ffffff" />,
        link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
        hoverColor: "#1DA1F2"
    },
    {
        name: "Instagram",
        icon: <FaInstagram size={iconSize} color="#ffffff" />,
        link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D",
        hoverColor: "#E1306C"
    },
    {
        name: "Email",
        icon: <FaEnvelope size={iconSize} color="#ffffff" />,
        link: "#",
        hoverColor: "#d44638",
        onClick: handleEmailClick
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubBarOpen, setIsSubBarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    const scrollConfig = {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 2500,
        isDynamic: true,
        spyThrottle: 100,
        easing: 'easeInOutQuart'
    };

    const handleCustomScroll = (targetId: string) => {
        scroller.scrollTo(targetId, scrollConfig);
        setActiveSection(targetId);
    };

    useEffect(() => {
        scrollSpy.update();
        Events.scrollEvent.register('begin', (to, element) => { });
        Events.scrollEvent.register('end', (to, element) => { });

        let timeoutId: string | number | NodeJS.Timeout | undefined;
        const handleScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                const sections = ['about', 'Wiempower-2024', 'past-events', 'team', 'projects', 'contact-us'];
                const viewportHeight = window.innerHeight;

                const currentSection = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const elementMiddle = rect.top + rect.height / 2;
                        const viewportMiddle = viewportHeight / 2;
                        return Math.abs(elementMiddle - viewportMiddle) < viewportHeight / 3;
                    }
                    return false;
                });

                if (currentSection) {
                    setActiveSection(currentSection);
                }
            }, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubBar = () => {
        setIsSubBarOpen(!isSubBarOpen);
    };

    const navLinkClass = (section: string) => `
        cursor-pointer 
        transition-all 
        duration-500
        hover:text-[#a855f7]
        ${activeSection === section ? 'text-[#a855f7]' : 'text-gray-200'}
    `;

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <div
                    onClick={() => handleCustomScroll('about')}
                    className="h-auto w-auto flex flex-row items-center justify-center cursor-pointer"
                >
                    <Image
                        src={require('../assets/logos/white_logo.png')}
                        alt="logo"
                        width={100}
                        height={100}
                        className="hover:animate-slowspin"
                    />
                </div>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <div className="flex items-center justify-between w-[600px] h-auto border border-[rgba(112,66,248,0.38)] bg-[#0300145e] px-[20px] py-[10px] rounded-full">
                        <div
                            onClick={() => handleCustomScroll('about')}
                            className={navLinkClass('about')}
                        >
                            About
                        </div>

                        <div className="relative">
                            <button
                                onClick={toggleSubBar}
                                className={`cursor-pointer transition-all duration-500 hover:text-[#a855f7] 
                                    ${(activeSection === 'Wiempower-2024' || activeSection === 'past-events') ?
                                        'text-[#a855f7]' : 'text-gray-200'}`}
                            >
                                Events
                            </button>
                            <AnimatePresence>
                                {isSubBarOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="absolute left-0 mt-2 w-48 bg-[#0300145e] border border-[rgba(112,66,248,0.38)] rounded-lg shadow-lg overflow-hidden"
                                    >
                                        <div
                                            onClick={() => {
                                                window.open('https://ieee-igdtuw.github.io/wie-website/index.html', '_blank');
                                                setIsSubBarOpen(false);
                                            }}
                                            className={`block px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#a855f7] hover:text-white
                                            ${activeSection === 'Wiempower-2024' ? 'bg-[#a855f7] text-white' : 'text-gray-200'}`}
                                        >
                                            WIEmpower 4.0
                                        </div>
                                        <div
                                            onClick={() => {
                                                window.open('https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/index.html', '_blank');
                                                setIsSubBarOpen(false);
                                            }}
                                            className={`block px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#a855f7] hover:text-white
                                            ${activeSection === 'Wiempower-2024' ? 'bg-[#a855f7] text-white' : 'text-gray-200'}`}
                                        >
                                            WIEmpower 3.0
                                        </div>
                                        <div
                                            onClick={() => {
                                                window.open('https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/about2.html', '_blank');
                                                setIsSubBarOpen(false);
                                            }}
                                            className={`block px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#a855f7] hover:text-white
                                            ${activeSection === 'Wiempower-2024' ? 'bg-[#a855f7] text-white' : 'text-gray-200'}`}
                                        >
                                            WIEmpower 2.0
                                        </div>
                                        <div
                                            onClick={() => {
                                                window.open('https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/about.html', '_blank');
                                                setIsSubBarOpen(false);
                                            }}
                                            className={`block px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#a855f7] hover:text-white
                                            ${activeSection === 'Wiempower-2024' ? 'bg-[#a855f7] text-white' : 'text-gray-200'}`}
                                        >
                                            WIEmpower 1.0
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div
                            onClick={() => handleCustomScroll('past-events')}
                            className={navLinkClass('past-events')}
                        >
                            Past Events
                        </div>
                        <div
                            onClick={() => handleCustomScroll('team')}
                            className={navLinkClass('team')}
                        >
                            Team
                        </div>
                        <div
                            onClick={() => handleCustomScroll('projects')}
                            className={navLinkClass('projects')}
                        >
                            Projects
                        </div>
                        <div
                            onClick={() => handleCustomScroll('contact-us')}
                            className={navLinkClass('contact-us')}
                        >
                            Contact Us
                        </div>
                    </div>
                </div>

                <div className="md:hidden">
                    <div
                        onClick={toggleMenu}
                        className={`w-[30px] h-[30px] bg-[#222222] rounded-md ${isMenuOpen ? 'block' : ''}`}
                    >
                        {isMenuOpen ? <SiX size={iconSize} color="white" /> : <FaBars size={iconSize} color="white" />}
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 right-0 w-[200px] bg-[#2a0e61] rounded-lg px-[10px] py-[20px]"
                        >
                            <div
                                onClick={() => {
                                    handleCustomScroll("about");
                                    setIsMenuOpen(false);
                                }}
                                className="mb-5 cursor-pointer text-white hover:text-[#a855f7] transition-all"
                            >
                                About
                            </div>
                            <div
                                onClick={() => {
                                    handleCustomScroll("Wiempower-2024");
                                    setIsMenuOpen(false);
                                }}
                                className="mb-5 cursor-pointer text-white hover:text-[#a855f7] transition-all"
                            >
                                WIEmpower 4.0
                            </div>
                            <div
                                onClick={() => {
                                    handleCustomScroll("team");
                                    setIsMenuOpen(false);
                                }}
                                className="mb-5 cursor-pointer text-white hover:text-[#a855f7] transition-all"
                            >
                                Team
                            </div>
                            <div
                                onClick={() => {
                                    handleCustomScroll("projects");
                                    setIsMenuOpen(false);
                                }}
                                className="mb-5 cursor-pointer text-white hover:text-[#a855f7] transition-all"
                            >
                                Projects
                            </div>
                            <div
                                onClick={() => {
                                    handleCustomScroll("contact-us");
                                    setIsMenuOpen(false);
                                }}
                                className="mb-5 cursor-pointer text-white hover:text-[#a855f7] transition-all"
                            >
                                Contact Us
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;
