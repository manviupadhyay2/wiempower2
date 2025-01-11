'use client';

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Events, scrollSpy, scroller } from "react-scroll";
import Image from "next/image";

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
    const [activeSection, setActiveSection] = useState("home");

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
                const sections = ['home', 'about', 'timeline', 'registration', 'contact'];
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
                    onClick={() => window.location.href = '/'} // Redirect to homepage
                    className="h-auto w-auto flex flex-row items-center justify-center cursor-pointer"
                >
                    <Image
                        src={require('src/assets/logos/white_logo.png')}
                        alt="logo"
                        width={100}
                        height={100}
                        className="hover:animate-slowspin"
                    />
                </div>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <div className="flex items-center justify-between w-[600px] h-auto border border-[rgba(112,66,248,0.38)] bg-[#0300145e] px-[20px] py-[10px] rounded-full">
                        <div
                            onClick={() => window.location.href = '/'} // Redirect to homepage
                            className={navLinkClass('home')}
                        >
                            IEEE IGDTUW
                        </div>

                        <div
                            onClick={() => handleCustomScroll('about')}
                            className={navLinkClass('about')}
                        >
                            About
                        </div>

                        <div
                            onClick={() => handleCustomScroll('timeline')}
                            className={navLinkClass('timeline')}
                        >
                            Timeline
                        </div>

                        <div
                            onClick={() => handleCustomScroll('registration')}
                            className={navLinkClass('registration')}
                        >
                            Registration
                        </div>

                        <div
                            onClick={() => handleCustomScroll('contact')}
                            className={navLinkClass('contact')}
                        >
                            Contact
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex flex-row gap-5 items-center">
                    {Socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.name === "Email" ? "#" : social.link}
                            target={social.name === "Email" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            onClick={social.onClick}
                            className="flex items-center justify-center text-gray-200 hover:text-gray-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div
                    onClick={toggleMenu}
                    className={`md:hidden rounded-md p-2 ${isMenuOpen ? 'bg-[#a855f7]' : 'bg-transparent'} cursor-pointer`}
                >
                    {isMenuOpen ? (
                        <SiX size={24} className="text-white" />
                    ) : (
                        <FaBars size={24} className="text-white" />
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="md:hidden absolute left-0 right-0 top-[65px] bg-[#030014] border border-[rgba(112,66,248,0.38)] rounded-md shadow-lg p-4 z-50"
                    >
                        <div className="flex flex-col gap-4">
                            <div onClick={() => window.location.href = '/'} className="text-gray-200 cursor-pointer hover:text-[#a855f7]">
                                IEEE IGDTUW
                            </div>
                            <div onClick={() => handleCustomScroll('about')} className="text-gray-200 cursor-pointer hover:text-[#a855f7]">
                                About
                            </div>
                            <div onClick={() => handleCustomScroll('timeline')} className="text-gray-200 cursor-pointer hover:text-[#a855f7]">
                                Timeline
                            </div>
                            <div onClick={() => handleCustomScroll('registration')} className="text-gray-200 cursor-pointer hover:text-[#a855f7]">
                                Registration
                            </div>
                            <div onClick={() => handleCustomScroll('contact')} className="text-gray-200 cursor-pointer hover:text-[#a855f7]">
                                Contact
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
