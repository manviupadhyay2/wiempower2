'use client';

import React, { useState, useEffect } from 'react';
import Header from "@/app/wiempower/components/Header";
import Hero from './components/Hero';
import About from './components/About';
import PastEvents from './components/PastEvents';
import Timeline from './components/Timeline';
import Theme from './components/Theme';
import SpeakerSection from './components/Speaker';
import Judges from './components/Judges';
import Faq from './components/Faq';
import Footer from '@/sections/Footer';
import BackToTop from './components/BackToTop';
import Loading from './Loading';

const Wiempower = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div id="cursor"></div>
                    <div id="cursor-blur"></div>

                    <Header />
                    <Hero />
                    <About />
                    <PastEvents />
                    <Timeline />
                    <Theme />
                    <SpeakerSection />
                    <Judges />
                    <Faq />
                    <Footer />
                    <BackToTop />
                </>
            )}
        </>
    );
};

export default Wiempower;
