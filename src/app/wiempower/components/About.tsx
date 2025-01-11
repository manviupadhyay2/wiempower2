import React from 'react';
import Wieimage from '@/assets/collegePic/igdtuw_pic.jpg'; // Image import

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-purple-900/20 p-16">
      <div className="max-w-[90rem] w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 
        backdrop-blur-sm bg-black/30 p-12 rounded-3xl 
        border border-pink-500/20 shadow-[0_0_80px_-12px_rgba(236,72,153,0.25)]
        animate-fadeIn">
        
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <h2 className="text-5xl font-extrabold text-left mb-26 
                    bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            WIEmpower 5.0
          </h2>
          
          <div className="space-y-6">
            <p className="text-white text-opacity-90 text-lg sm:text-xl font-light 
              leading-relaxed tracking-wide p-6 
              bg-gradient-to-r from-pink-500/10 to-purple-500/10 
              rounded-lg shadow-lg transform hover:translate-y-[-2px] 
              transition-all duration-300">
              WIEmpower 5.0 is an initiative that seeks to bring together like-minded individuals
              from diverse backgrounds to empower and inspire the community.
            </p>
            
            <p className="text-white text-opacity-90 text-lg sm:text-xl font-light 
              leading-relaxed tracking-wide p-6 
              bg-gradient-to-r from-purple-500/10 to-pink-500/10 
              rounded-lg shadow-lg transform hover:translate-y-[-2px] 
              transition-all duration-300">
              Through a series of events, workshops, and talks, WIEmpower 5.0 aims to foster innovation,
              leadership, and growth. Our mission is to create a platform where ideas are exchanged,
              skills are enhanced, and connections are made.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 overflow-hidden rounded-xl 
          shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)]
          transform hover:scale-102 transition-all duration-500">
          <img
            src={Wieimage.src}
            alt="WIEmpower 5.0"
            className="w-full h-auto object-cover rounded-xl 
              animate-fadeIn hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;